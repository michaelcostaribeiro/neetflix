import { createElement, useState } from 'react'
import styles from './CarouselItem.module.css'

const CarouselItem = ({ name, link, thumb, ref }) => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const handleClick = (e) => {
        setButtonClicked(true)
    }
    return (
        <div className={styles.CarouselItem} key={name}>
            <button href={link} onClick={handleClick}><img src={thumb} alt={name + ' thumbnail'} ref={ref} /></button>
            {buttonClicked && <div className={styles.videoScreen} onClick={() => setButtonClicked(false)}>
                <iframe
                    width="90%"
                    height="90%"
                    src="https://www.youtube.com/embed/I4WUSVrjNHE?si=c3T6m9mJa111FeVv" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>}
        </div>

    )
}

export default CarouselItem