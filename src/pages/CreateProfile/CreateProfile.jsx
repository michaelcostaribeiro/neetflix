import { useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './CreateProfile.module.css'
import useFetchDocument from '../../hooks/useFetchDocument'

const CreateProfile = () => {
    const [name, setName] = useState('')
    const [imageURL, setImageURL] = useState('')
    const {addProfile} = useFetchDocument()


    const handleSubmit = (e) => {
        e.preventDefault()
        addProfile(name, imageURL)
    }
    return (
        // { id, value, setValue, labelText ='Email', type='email' }
        <div className='flex1'>
            <div className={styles.CreateProfile + ' container current-query'}>
                <form onSubmit={handleSubmit}>
                    <h1>Crie seu perfil</h1>
                    <p>Qual o name de quem vai usar o perfil?</p>
                    <TextInput id={name} value={name} setValue={setName} labelText='Nome' type='text' />
                    <p>Escolha uma imagem de perfil?[32px,32px]</p>
                    <TextInput id={'url'} value={imageURL} setValue={setImageURL} labelText='URL da Imagem' type='text' />
                    <input type="submit" value="Criar" className={'btn'} />
                </form>

            </div>
        </div>
    )
}

export default CreateProfile