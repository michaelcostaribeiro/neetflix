// css
import styles from './EditVideos.module.css'

// hooks
import { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import AddVideos from '../AddVideos/AddVideos'

// context
import {useLanguageValue} from '../../context/languageContext'


const EditVideos = () => {
    const {t} = useLanguageValue()

    const [choice, setChoice] = useState('')

    return (
        <div className={styles.EditVideos} >
            <h2>{t('editVideosH2')}</h2>
            {!choice && <>
                <button className='btn' onClick={() => setChoice('add')}>{t('editVideosAddButton')}</button>
                <Link className='btn' to={'/edit'} >{t('editVideosEditButton')}</Link>
            </>
            }
            {choice === 'add' && 
            <>
                <AddVideos />
                <button className='btn' onClick={() => setChoice('')}>{t('editVideosReturn')}</button>
            </>
            }
        </div>
    )
}

export default EditVideos