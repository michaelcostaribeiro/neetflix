import { useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import useAuthentication from '../../hooks/useAuthentication'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useAuthentication()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
    }

    return (
        <div className='flex1'>
            <div className={styles.Login + ' current-query container'}>
                <h1>Entrar</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        id={'email'}
                        value={email}
                        setValue={setEmail} />

                    <TextInput
                        id={'password'}
                        value={password}
                        setValue={setPassword}
                        labelText='Senha'
                        type='password' />

                    <input type="submit" value="Entrar" className='btn' />
                </form>
                <p>Primeira vez aqui? <Link to={'/register'}>Assine agora.</Link></p>


            </div>
        </div>
    )
}

export default Login