// css
import styles from './Browse.module.css'

// hooks
import { useState } from 'react'

// components
import Profiles from '../../components/Profiles/Profiles'
import BrowseVideos from '../../components/BrowseVideos/BrowseVideos'



const Browse = () => {
    const [profile, setProfile] = useState(undefined)

    return (
        <div className={styles.Browse+' flex1'}>
            <div className={styles.Browse + ' container'}>

                {profile ? <BrowseVideos/> : <Profiles setProfile={setProfile} />}

            </div>
            <div className='grayBackground'></div>
        </div>

    )
}

export default Browse