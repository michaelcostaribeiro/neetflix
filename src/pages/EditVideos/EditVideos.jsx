// css
import { useState } from 'react'
import styles from './EditVideos.module.css'
import AddVideos from '../AddVideos/AddVideos'
import { Link } from 'react-router-dom'

const EditVideos = () => {
    const [choice, setChoice] = useState('')

    return (
        <div className={styles.EditVideos} >
            <h2>Editando</h2>
            {!choice && <>
                <button className='btn' onClick={() => setChoice('add')}>Adicionar vídeo</button>
                <Link className='btn' to={'/edit'} >Editar vídeo</Link>
            </>
            }
            {choice === 'add' && 
            <>
                <AddVideos />
            <button className='btn' onClick={() => setChoice('')}>Voltar</button>
            </>
            }
        </div>
    )
}

export default EditVideos