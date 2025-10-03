import { useState } from 'react'
import Profiles from '../../components/Profiles/Profiles'
import styles from './Browse.module.css'
import BrowseVideos from '../../components/BrowseVideos/BrowseVideos'


const Browse = () => {
    const [profile, setProfile] = useState(undefined)



    return (
        <div className={styles.Browse+' flex1'}>
            <div className={styles.Browse + ' container'}>

                {profile ? <BrowseVideos/> : <Profiles setProfile={setProfile} />}

            </div>
            <div className={styles.Background}></div>
        </div>

    )
}

export default Browse