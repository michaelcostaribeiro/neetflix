// css
import styles from './Login.module.css'

// hooks
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthentication from '../../hooks/useAuthentication'

// components
import TextInput from '../../components/TextInput/TextInput'

// context
import { useLanguageValue } from '../../context/languageContext'

const Login = () => {
    const {t} = useLanguageValue()
    const {login, error: firebaseError} = useAuthentication()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(()=> {
        setError(firebaseError)
    },[firebaseError])

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
                    {error && <div className='error'>{error}</div>}
                    <div className={styles.adminCredentials}>
                        <h3>admin:</h3>
                        <hr />
                        <p>admin@mail.com</p>
                        <p>123456789</p>
                    </div>
                </div>
            </div>
            <div className='backgroundImage'></div>
        </div>
    )
}

export default Login