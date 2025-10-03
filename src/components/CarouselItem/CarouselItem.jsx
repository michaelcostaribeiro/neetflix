import styles from './CarouselItem.module.css'

const CarouselItem = ({name,link,thumb }) => {
    return (
        <div className={styles.CarouselItem} key={name}>
            <a href={link} target='_blank'><img src={thumb} alt={name + ' thumbnail'} /></a>
        </div>

    )
}

export default CarouselItem