// firebase
import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
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
    const addVideos = async (videoName, videoGenre, author,linkVideo, thumbURL) => {
        try {
            const userRef = doc(db, 'videos', videoGenre)
            console.log(userRef.id)

            await setDoc(doc(db, 'videos', videoGenre), {
                'videos': arrayUnion({
                    videoName,
                    author,
                    linkVideo,
                    thumbURL
                })
            }, { merge: true })
        } catch (firebaseError) {
            console.log('erro: ', firebaseError)
        }
    }
    const getVideos = useCallback(async () =>{
        let videosArray = []
        try{
            const videosSnapshot = await getDocs(collection(db, "videos"));
            videosSnapshot.forEach((doc) => {
                let generoatual =  {
                    [doc.id]: doc.data()
                }
                videosArray = [...videosArray, generoatual]
            });
        } catch(firebaseError){
            console.log(firebaseError)
        }
        console.log(videosArray)
        return [...videosArray]
    },[])

    const getProfiles = useCallback(async () => {
        if (auth.currentUser) {
            const currentUser = auth.currentUser.uid
            const userRef = doc(db, 'users', currentUser)
            const userSnap = await getDoc(userRef)

            return userSnap.data()
        }
    }, [])


    return {
        updatePlan,
        addProfile,
        addVideos,
        getVideos,
        getProfiles
    }
}

export default useFetchDocument;