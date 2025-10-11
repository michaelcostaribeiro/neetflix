import { useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import useAuthentication from '../../hooks/useAuthentication'
import { useLanguageValue } from '../../context/languageContext'

const Login = () => {
    const {t} = useLanguageValue()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useAuthentication()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
    }

    return (
        <div className='flex1'>
            <div className={styles.LoginContainer + ' current-query container'}>
                <div className={styles.Login}>
                    <h1>{t('loginH1')}</h1>
                    <form onSubmit={handleSubmit}>
                        <TextInput
                            id={'email'}
                            value={email}
                            setValue={setEmail}
                            labelText={t('loginEmailLabel')} />
                        <TextInput
                            id={'password'}
                            value={password}
                            setValue={setPassword}
                            labelText={t('loginPasswordLabel')}
                            type='password' />
                        <input type="submit" value={t('loginSubmit')} className='btn' />
                    </form>
                    <p> {t('loginP')} <Link to={'/register'}>{t('loginLink')}</Link></p>
                </div>
            </div>
            <div className='backgroundImage'></div>
        </div>
    )
}

export default Login