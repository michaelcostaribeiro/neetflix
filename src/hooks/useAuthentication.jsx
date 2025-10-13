// firebase
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { doc, getDoc, setDoc } from "firebase/firestore";

// hooks
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/authContext";
import { useCallback, useState } from "react";
import { useLanguageValue } from "../context/languageContext";



export function useAuthentication() {
    const { t } = useLanguageValue()
    const [error, setError] = useState('')

    const navigate = useNavigate('')
    const user = useAuthValue()

    const register = async (displayName, email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, {
                displayName
            })
            navigate('/')

            await setDoc(doc(db, 'users', `${auth.currentUser.uid}`), {
                'free-plan': false,
                'premium-plan': false,
                'uid': auth.currentUser.uid
            })
        } catch (firebaseError) {
            console.log(firebaseError.message)
            setError(firebaseError.message)
            if (firebaseError.message.includes('invalid-email')) {
                setError(t('invalidEmail'))
            } else if (firebaseError.message.includes('email-already-in-use')) {
                setError(t('emailInUse'))
            }
            else if (firebaseError.message.includes('weak-password')) {
                setError(t('weakPassword'))
            } else if (firebaseError.message.includes('network-request-failed')) {
                setError(t('networkError'))
            } else if (firebaseError.message.includes('too-many-requests')) {
                setError(t('tooManyRequests'))
            }

        }
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (firebaseError) {
            console.log(firebaseError.message)
            if (firebaseError.message.includes('too-many-requests')) {
                setError(t('tooManyRequests'))
            } else if (firebaseError.message.includes('network-request-failed')) {
                setError(t('networkError'))
            } else {
                setError(t('invalidCredential'))
            }
        }
    }


    const logout = async () => {
        navigate('/')
        await signOut(auth)
    }

    const validatePlan = useCallback(async () => {
        if (user) {
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            const res = docSnap.data()

            if (res['free-plan'] === true || res['medium-plan'] === true || res['premium-plan'] === true) {
                return (true)
            } else {
                return (false)
            }
        } else {
            return (false)
        }

    }, [user])



    return {
        register,
        login,
        validatePlan,
        logout,
        error
    };
}

export default useAuthentication;