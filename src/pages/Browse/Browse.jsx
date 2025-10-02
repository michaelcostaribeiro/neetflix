import { useState } from 'react'
import Profiles from '../../components/Profiles/Profiles'
import styles from './Browse.module.css'


const Browse = () => {
    const [profile, setProfile] = useState(undefined)



    return (
        <div className={styles.Browse+' flex1'}>
            <div className={styles.Browse + ' container current-query'}>

                {profile ? <p>{profile} logado</p> : <Profiles setProfile={setProfile} />}

            </div>
        </div>

    )
}

export default Browse