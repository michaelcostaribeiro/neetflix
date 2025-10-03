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
    const [videoAdicionado, setVideoAdicionado] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        if(videoGender === ''){
            console.log('genero vazio')
            return
        }
        setVideoAdicionado('')

        setVideoName('')
        setAuthor('')
        setLinkVideo('')
        setThumbURL('')
            
        addVideos(videoName, videoGender, author, linkVideo, thumbURL)
        setVideoAdicionado(thumbURL)
    }
    return (
        <div className='flex1'>
            <div className={styles.EditVideos + ' container current-query'}>
                <h1>Insira as informações do vídeo:</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput id={videoName} value={videoName} setValue={setVideoName} labelText='Nome' type='text' />
                    <select name='gender' id="gender" onChange={(e) => setVideoGender(e.target.value)}className={styles.selectGender}>
                        <option value="">Gênero</option>
                        <option value="LoL">LoL</option>
                        <option value="Musica">Musica</option>
                        <option value="Viagem">Viagem</option>
                        <option value="Vlog">Vlog</option>
                        <option value="Review">Review</option>
                        <option value="React">React</option>
                    </select>
                    <TextInput id={author} value={author} setValue={setAuthor} labelText='Autor' type='text' />
                    <TextInput id={linkVideo} value={linkVideo} setValue={setLinkVideo} labelText='Link do video' type='text' />
                    <TextInput id={thumbURL} value={thumbURL} setValue={setThumbURL} labelText='URL da Thumbnail' type='text' />
                    {/* {id, value, setValue, labelText = 'Email', type = 'email'} */}
                    <input type="submit" value="Adicionar" className='btn' />
                </form>
                {videoAdicionado && <div className={styles.videoAdicionado}>
                    <h2>Vídeo adicionado com sucesso!</h2>
                    <p>Preview:</p>
                    <img src={videoAdicionado}/>
                </div>}
            </div>
        </div>
    )
}

export default EditVideos