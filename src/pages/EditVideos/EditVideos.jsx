// css
import { useState } from 'react'
import styles from './EditVideos.module.css'
import AddVideos from '../AddVideos/AddVideos'
import { Link } from 'react-router-dom'
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