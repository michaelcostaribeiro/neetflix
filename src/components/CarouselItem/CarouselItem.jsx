import styles from './CarouselItem.module.css'

const CarouselItem = ({name,link,thumb,ref }) => {
    return (
        <div className={styles.CarouselItem} key={name}>
            <a href={link} target='_blank'><img src={thumb} alt={name + ' thumbnail'} ref={ref} /></a>
        </div>

    )
}

export default CarouselItem