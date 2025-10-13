// css
import styles from './Profiles.module.css'

// hooks
import useFetchDocument from '../../hooks/useFetchDocument'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// components
import Loading from '../Loading/Loading'

// context
import { useLanguageValue } from '../../context/languageContext'



const Profiles = ({ setProfile }) => {
    const {t} = useLanguageValue()

    const { getProfiles } = useFetchDocument()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProfiles = async () => {
            setLoading(true)
            const userData = await getProfiles()
            if (userData.profiles) {
                setData(userData.profiles)
            }
            setLoading(false)
        }
        loadProfiles()
    }, [getProfiles])

    const setCurrentProfile = (name) => {
        setProfile(name)
    }




    return loading ? <Loading/> : (
        <div className={styles.Profiles + ' flex1'}>
            <h1>{t('profilesH1')}</h1>
            <ul>
                {data && data.map((item) => {
                    return <li key={item.name} onClick={() => setCurrentProfile(item.name)}><img src={item.image} alt="profileImage" />{item.name}</li>
                })}
                {data.length<6 &&
                <li>
                    <Link className={styles.profileButton + ' btn'} to={'/createProfile'}>{t('profilesLink')}</Link>
                </li>
                }
            </ul>

        </div>
    )
}

export default Profiles