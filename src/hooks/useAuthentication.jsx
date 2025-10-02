// firebase
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { doc, getDoc, setDoc } from "firebase/firestore";

// hooks
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/authContext";
import { useCallback } from "react";



export function useAuthentication() {
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
            console.log('Erro: ', firebaseError)
            return
        }
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')

        } catch (firebaseError) {
            console.log('erro: ', firebaseError)
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

    },[user])



    return {
        register,
        login,
        validatePlan,
        logout
    };
}

export default useAuthentication;