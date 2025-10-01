import { useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './Register.module.css'
import useAuthentication from '../../hooks/useAuthentication'


const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register} = useAuthentication()

    const handleSubmit = (e) => {
        e.preventDefault()
        register(displayName,email,password)

    }

    return (
        <div className='flex1'>
            <div className={styles.Register + ' current-query container'}>
                <p>Passo <b>1</b> de <b>2</b></p>
                <h2>Crie sua conta:</h2>
                <form onSubmit={handleSubmit}>
                    <TextInput id={'displayName'} value={displayName} setValue={setDisplayName} labelText='Nome' type='text'/>
                    <TextInput id={'email'} value={email} setValue={setEmail}/>
                    <TextInput id={'password'} value={password} setValue={setPassword} labelText='Senha' type='password'/>
                    <input type="submit" value="Registrar" className='btn' />

                    {/* { id, value, setValue, labelText ='Email', type='email' } */}
                </form>
            </div>
        </div>
    )
}

export default Register