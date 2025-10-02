// firebase
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

// hooks
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";




export function useFetchDocument() {
    const navigate = useNavigate('')


    const updatePlan = async (plan, isTrue) => {
        try {
            const currentUser = auth.currentUser.uid
            const userRef = doc(db, 'users', currentUser)

            await updateDoc(userRef, {
                [plan]: isTrue
            })
            navigate('/browse')
        } catch (firebaseError) {
            console.log('erro: ', firebaseError)
        }
    }
    const addProfile = async (profileName, imageURL) => {
        try {
            const currentUser = auth.currentUser.uid
            const userRef = doc(db, 'users', currentUser)

            await updateDoc(userRef, {
                'profiles': arrayUnion({
                    name: profileName, 
                    image: imageURL
                })
            })
            navigate('/browse')
        } catch (firebaseError) {
            console.log('erro: ', firebaseError)
        }
    }

    const getProfiles = useCallback (async () => {
        if (auth.currentUser){
            const currentUser = auth.currentUser.uid
            const userRef = doc(db, 'users', currentUser)
            const userSnap = await getDoc(userRef)
    
            return userSnap.data()
        }
    },[])


    return {
        updatePlan,
        addProfile,
        getProfiles
    }
}

export default useFetchDocument;