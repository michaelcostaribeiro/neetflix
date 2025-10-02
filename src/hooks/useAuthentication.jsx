// firebase
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";

// hooks
import { useNavigate } from "react-router-dom";



export function useAuthentication() {
    const navigate = useNavigate('')
    
    const register = async (displayName,email,password) => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            updateProfile(auth.currentUser, {
                displayName
            })
            navigate('/')

            await setDoc(doc(db, 'users', `${auth.currentUser.uid}` ),{
                'free-plan':false,
                'premium-plan':false,
                'uid': auth.currentUser.uid
            })
        }catch(firebaseError){
            console.log('Erro: ',firebaseError)
            return
        }
    }

    const login = async (email,password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')

        } catch (firebaseError) {
            console.log('erro: ',firebaseError)
        }
    }


    const logout = async () => {
        navigate('/')
        await signOut(auth)
    }



    return { 
        register,
        login,
        logout
     };
}

export default useAuthentication;