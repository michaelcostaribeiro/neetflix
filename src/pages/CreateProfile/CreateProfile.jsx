// css
import styles from './CreateProfile.module.css'

// hooks
import { useState } from 'react'
import useFetchDocument from '../../hooks/useFetchDocument'

// components
import TextInput from '../../components/TextInput/TextInput'

// context
import {useLanguageValue} from '../../context/languageContext'


const CreateProfile = () => {
    const {t} = useLanguageValue()
    const [error, setError] = useState('')


    const [name, setName] = useState('')
    const [imageURL, setImageURL] = useState('')
    const {addProfile} = useFetchDocument()


    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            new URL(imageURL)
        }catch(error){
            console.log(error.message)
            setError(t('invalidURL'))
            return
        }
        addProfile(name, imageURL)
    }
    return (
        <div className='flex1'>
            <div className={styles.CreateProfile + ' container current-query'}>
                <form onSubmit={handleSubmit}>
                    <h1>{t('createProfileH1')}</h1>
                    <p>{t('createProfileP1')}</p>
                    <TextInput id={name} value={name} setValue={setName} labelText={t('createProfileInput1')} type='text' />
                    <p>{t('createProfileP2')}</p>
                    <TextInput id={'url'} value={imageURL} setValue={setImageURL} labelText={t('createProfileInput2')} type='text' />
                    <input type="submit" value={t('createProfileSubmit')} className={'btn'} />
                </form>
                {error && <div className='error'>{error}</div>}

            </div>
            <div className='grayBackground'></div>
        </div>
    )
}

export default CreateProfile