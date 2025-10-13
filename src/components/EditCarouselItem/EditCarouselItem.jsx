// css
import styles from './EditCarouselItem.module.css'

// hooks
import { createElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const EditCarouselItem = ({ name, link, thumb, ref, navigateLink }) => {
    const navigate = useNavigate('')


    return (
        <div className={styles.EditCarouselItem} key={name}>
            <button href={link} onClick={()=> navigate(navigateLink)}>
                <img src={thumb} alt={name + ' thumbnail'} ref={ref} />
            </button>
        </div>

    )
}

export default EditCarouselItem