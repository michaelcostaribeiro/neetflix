// css
import { use, useState } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import useFetchDocument from '../../hooks/useFetchDocument'
import styles from './AddVideos.module.css'
import { useLanguageValue } from '../../context/languageContext'

const AddVideos = () => {
    const {t} = useLanguageValue()

    const [videoName, setVideoName] = useState('')
    const [videoGenre, setVideoGenre] = useState('')
    const [author, setAuthor] = useState('')
    const [linkVideo, setLinkVideo] = useState('')
    const [thumbURL, setThumbURL] = useState('')
    const [error, setError] = useState('')
    const { addVideos } = useFetchDocument()
    const [videoAdicionado, setVideoAdicionado] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        if(videoGenre === ''){
            console.log('genero vazio')
            return
        }
        setVideoAdicionado('')

        setVideoName('')
        setAuthor('')
        setLinkVideo('')
        setThumbURL('')
            
        addVideos(videoName, videoGenre, author, linkVideo, thumbURL)
        setVideoAdicionado(thumbURL)
    }
    return (
        <div className='flex1'>
            <div className={styles.AddVideos + ' container current-query'}>
                <h1>{t('addVideosH1')}</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput id={videoName} value={videoName} setValue={setVideoName} labelText={t('addVideosNameLabel')} type='text' />

                    <select name='genre' id="genre" onChange={(e) => setVideoGenre(e.target.value)}className={styles.selectGenre}>
                        <option value="">{t('addVideosGenre')}</option>
                        <option value="LoL">{t('addVideosGenreLoL')}</option>
                        <option value="Musica">{t('addVideosGenreMusica')}</option>
                        <option value="Viagem">{t('addVideosGenreViagem')}</option>
                        <option value="Vlog">{t('addVideosGenreVlog')}</option>
                        <option value="Review">{t('addVideosGenreReview')}</option>
                        <option value="React">{t('addVideosGenreReact')}</option>
                    </select>
                    <TextInput id={author} value={author} setValue={setAuthor} labelText={t('addVideosAuthor')}  type='text' />

                    <TextInput id={linkVideo} value={linkVideo} setValue={setLinkVideo} labelText={t('addVideosLink')}  type='text' />

                    <TextInput id={thumbURL} value={thumbURL} setValue={setThumbURL} labelText={t('addVideosURL')}  type='text' />

                    <input type="submit" value={t('addVideosSubmit')} className='btn' />
                </form>
                {videoAdicionado && <div className={styles.videoAdicionado}>
                    <h2>Vídeo adicionado com sucesso!</h2>
                    <p>Preview:</p>
                    <img src={videoAdicionado}/>
                </div>}
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default AddVideos