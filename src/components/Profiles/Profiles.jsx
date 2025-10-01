import styles from './Profiles.module.css'
import useFetchDocument from '../../hooks/useFetchDocument'
import { useEffect, useState } from 'react'
import placeHolderImage from '../../assets/logoIcon.png'

const Profiles = ({setProfile}) => {
    const { getProfiles } = useFetchDocument()
    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const loadProfiles = async () => {
            const userData = await getProfiles()
            setData(userData.profiles)
            setLoading(false)
        }
        loadProfiles()
    }, [getProfiles])

    const setCurrentProfile = (item) => {
        setProfile(item)
    }

    



    return loading ? <p>carregando</p>:(
        <div className={styles.Profiles}>
            <h1>Escolha o perfil de quem está assistindo:</h1>
            <ul>
                {data.map((item) => {
                    return <li key={item} onClick={() => setCurrentProfile(item)}><img src={placeHolderImage} alt="placeHolderImage" />{item}</li>
                })}
                <li ><img src={placeHolderImage} alt="placeHolderImage" />user3</li>
                <li ><img src={placeHolderImage} alt="placeHolderImage" />user4</li>
                <li ><img src={placeHolderImage} alt="placeHolderImage" />user5</li>
                <li ><img src={placeHolderImage} alt="placeHolderImage" />user6</li>
                <li ><img src={placeHolderImage} alt="placeHolderImage" />user7</li>
                <li ><img src={placeHolderImage} alt="placeHolderImage" />user8</li>
            </ul>

        </div>
    )
}

export default Profiles