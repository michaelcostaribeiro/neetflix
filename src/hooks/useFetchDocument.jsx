import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
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

    const getProfiles = useCallback (async () => {
        const currentUser = auth.currentUser.uid
        const userRef = doc(db, 'users', currentUser)
        const userSnap = await getDoc(userRef)
        return userSnap.data()
    },[])


    return {
        updatePlan,
        getProfiles
    }
}

export default useFetchDocument;