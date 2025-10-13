// css
import styles from './AddVideos.module.css'

// hooks
import { use, useState } from 'react'
import useFetchDocument from '../../hooks/useFetchDocument'

// components
import TextInput from '../../components/TextInput/TextInput'

// context
import { useLanguageValue } from '../../context/languageContext'



const AddVideos = () => {
    const { t } = useLanguageValue()

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
        if (videoGenre === '') {
            setVideoAdicionado('')
            setError(t('genreError'))
            return
        } else if (linkVideo.includes('youtube.com') || linkVideo.includes('youtu.be')) {
            try {
                new URL(linkVideo)
                new URL(thumbURL)
            } catch (error) {
                setVideoAdicionado('')
                setError(t('invalidURL'))
                return
            }

            setVideoAdicionado('')
            setVideoName('')
            setAuthor('')
            setLinkVideo('')
            setThumbURL('')

            addVideos(videoName, videoGenre, author, linkVideo, thumbURL)
            setVideoAdicionado(thumbURL)
            setError('')

        } else {
            setVideoAdicionado('')
            setError(t('invalidYoutubeURL'))
            return
        }
    }
    return (
        <div className='flex1'>
            <div className={styles.AddVideos + ' container current-query'}>
                <h1>{t('addVideosH1')}</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput id={videoName} value={videoName} setValue={setVideoName} labelText={t('addVideosNameLabel')} type='text' />

                    <select name='genre' id="genre" onChange={(e) => setVideoGenre(e.target.value)} className={styles.selectGenre}>
                        <option value="">{t('addVideosGenre')}</option>
                        <option value="LoL">{t('addVideosGenreLoL')}</option>
                        <option value="Musica">{t('addVideosGenreMusica')}</option>
                        <option value="Viagem">{t('addVideosGenreViagem')}</option>
                        <option value="Vlog">{t('addVideosGenreVlog')}</option>
                        <option value="Review">{t('addVideosGenreReview')}</option>
                        <option value="React">{t('addVideosGenreReact')}</option>
                    </select>
                    <TextInput id={author} value={author} setValue={setAuthor} labelText={t('addVideosAuthor')} type='text' />

                    <TextInput id={linkVideo} value={linkVideo} setValue={setLinkVideo} labelText={t('addVideosLink')} type='text' />

                    <TextInput id={thumbURL} value={thumbURL} setValue={setThumbURL} labelText={t('addVideosURL')} type='text' />

                    <input type="submit" value={t('addVideosSubmit')} className='btn' />
                </form>
                {videoAdicionado && <div className={styles.videoAdicionado}>
                    <h2>Vídeo adicionado com sucesso!</h2>
                    <p>Preview:</p>
                    <img src={videoAdicionado} />
                </div>}
                {error && <div className='error'>{error}</div>}
            </div>
        </div>
    )
}

export default AddVideos