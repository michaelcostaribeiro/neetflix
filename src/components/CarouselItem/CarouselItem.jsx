import { useEffect, useState } from 'react'
import styles from './CarouselItem.module.css'

const CarouselItem = ({ name, link, thumb, ref }) => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [videoLink, setVideoLink] = useState('')
    useEffect(()=>{

    },[])
    const handleClick = (e) => {
        console.log(link)
        let videoLink = link.split('=')[1]
        const splittedLink = link.split('/')
        if (splittedLink.includes('youtu.be')){
            videoLink = splittedLink[3].split('?')[0]   
            setVideoLink(`https://www.youtube.com/embed/${videoLink}`)
        }else{
            setVideoLink(`https://www.youtube.com/embed/${videoLink}`)
        }

        setButtonClicked(true)
    }
    return (
        <div className={styles.CarouselItem} key={name}>
            <button href={link} onClick={handleClick}><img src={thumb} alt={name + ' thumbnail'} ref={ref} /></button>
            {buttonClicked && <div className={styles.videoScreen} onClick={() => setButtonClicked(false)}>
                <iframe
                    width="90%"
                    height="90%"
                    src={videoLink} title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>}
        </div>

    )
}

export default CarouselItem