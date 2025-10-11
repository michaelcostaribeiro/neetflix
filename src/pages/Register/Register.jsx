import { useState, useEffect } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Register.module.css'
import useAuthentication from '../../hooks/useAuthentication'
import { useLocation } from 'react-router-dom'
import { useLanguageValue } from '../../context/languageContext'


const Register = () => {
    const {t} = useLanguageValue()

    const location = useLocation()
    const initialemail = location.state?.initialemail || ''


    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register} = useAuthentication()
    useEffect(()=>{
        if (initialemail){
            setEmail(initialemail)
            console.log(email)
        }
    }, [initialemail])

    const handleSubmit = (e) => {
        e.preventDefault()
        register(displayName,email,password)

    }

    return (
        <div className='flex1'>
            <div className={styles.RegisterContainer + ' current-query container'}>
                <div className={styles.Register}>
                    <p>{t('registerP')}</p>
                    <h2>{t('registerH2')}</h2>
                    <form onSubmit={handleSubmit}>
                        <TextInput id={'displayName'} value={displayName} setValue={setDisplayName} labelText={t('registerNameLabel')} type='text'/>

                        <TextInput id={'email'} value={email} labelText={t('registerEmailLabel')} setValue={setEmail}/>

                        <TextInput id={'password'} value={password} setValue={setPassword} labelText={t('registerPasswordLabel')} type='password'/>

                        <input type="submit" value={t('registerSubmit')} className='btn' />
                    </form>
                </div>
            </div>
            <div className='backgroundImage'></div>
        </div>
    )
}

export default Register