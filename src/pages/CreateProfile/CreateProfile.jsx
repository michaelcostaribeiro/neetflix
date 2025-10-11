import { useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import styles from './CreateProfile.module.css'
import useFetchDocument from '../../hooks/useFetchDocument'
import {useLanguageValue} from '../../context/languageContext'

const CreateProfile = () => {
    const {t} = useLanguageValue()


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
                    <h1>{t('createProfileH1')}</h1>
                    <p>{t('createProfileP1')}</p>
                    <TextInput id={name} value={name} setValue={setName} labelText={t('createProfileInput1')} type='text' />
                    <p>{t('createProfileP2')}</p>
                    <TextInput id={'url'} value={imageURL} setValue={setImageURL} labelText={t('createProfileInput2')} type='text' />
                    <input type="submit" value={t('createProfileSubmit')} className={'btn'} />
                </form>

            </div>
            <div className='grayBackground'></div>
        </div>
    )
}

export default CreateProfile