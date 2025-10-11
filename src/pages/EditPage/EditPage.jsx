import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetchDocument from '../../hooks/useFetchDocument'
import styles from './EditPage.module.css'
import TextInput from '../../components/TextInput/TextInput'

const EditPage = () => {

    const { genre, index } = useParams()
    const { getVideo, updateVideo, deleteVideo } = useFetchDocument()

    const [videoGenre, setVideoGenre] = useState('')
    const [author, setAuthor] = useState('')
    const [linkVideo, setLinkVideo] = useState('')
    const [thumbURL, setThumbURL] = useState('')
    const [videoName, setVideoName] = useState('')

    const [error, setError] = useState('')

    const navigate = useNavigate('')


    useEffect(() => {
        const loadData = async () => {
            const data = await getVideo(genre, index)

            setVideoGenre(data.id)
            setAuthor(data.author)
            setLinkVideo(data.linkVideo)
            setThumbURL(data.thumbURL)
            setVideoName(data.videoName)
        }

        loadData()
    }, [genre, index, getVideo])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`status do vídeo editado: ${videoName}  ${linkVideo} ${thumbURL} `)
        const info = {
            author,
            linkVideo,
            thumbURL,
            videoName
        }
        updateVideo(genre, index, info)
        navigate('/edit')

    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteVideo(genre, index)


        navigate('/edit')
    }
    return (
        <div className='flex1'>
            <div className={styles.Edit + ' container current-query'}>
                <h1>Insira as informações do vídeo:</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput id={videoName} value={videoName} setValue={setVideoName} labelText='Nome' type='text' />
                    <TextInput id={author} value={author} setValue={setAuthor} labelText='Autor' type='text' />
                    <TextInput id={linkVideo} value={linkVideo} setValue={setLinkVideo} labelText='Link do video' type='text' />
                    <TextInput id={thumbURL} value={thumbURL} setValue={setThumbURL} labelText='URL da Thumbnail' type='text' />
                    {/* {id, value, setValue, labelText = 'Email', type = 'email'} */}
                    <div className={styles.Buttons}>
                        <input type="submit" value="Editar" className='btn' />
                        <button onClick={handleDelete} className={styles.DeleteButton + ' btn'}>Deletar vídeo</button>
                    </div>
                </form>

                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default EditPage