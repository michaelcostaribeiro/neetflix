// css
import { useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import useFetchDocument from '../../hooks/useFetchDocument'
import styles from './EditVideos.module.css'

const EditVideos = () => {
    const [videoName, setVideoName] = useState('')
    const [videoGender, setVideoGender] = useState('')
    const [author, setAuthor] = useState('')
    const [linkVideo, setLinkVideo] = useState('')
    const [thumbURL, setThumbURL] = useState('')
    const { addVideos } = useFetchDocument()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(videoName, videoGender, author, linkVideo, thumbURL)
        addVideos(videoName, videoGender, author, linkVideo, thumbURL)
    }
    return (
        <div className='flex1'>
            <div className={styles.EditVideos + ' container current-query'}>
                <h1>Insira as informações do vídeo:</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput id={videoName} setValue={setVideoName} labelText='Nome' type='text' />
                    <TextInput id={videoGender} setValue={setVideoGender} labelText='Gênero' type='text' />
                    <TextInput id={author} setValue={setAuthor} labelText='Autor' type='text' />
                    <TextInput id={linkVideo} setValue={setLinkVideo} labelText='Link do video' type='text' />
                    <TextInput id={thumbURL} setValue={setThumbURL} labelText='URL da Thumbnail' type='text' />
                    {/* {id, value, setValue, labelText = 'Email', type = 'email'} */}
                    <input type="submit" value="Adicionar" className='btn' />
                </form>
            </div>
        </div>
    )
}

export default EditVideos