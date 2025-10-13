// css
import styles from './Edit.module.css'

// hooks
import { use, useEffect, useRef, useState } from 'react'
import useFetchDocument from '../../hooks/useFetchDocument'
import { useNavigate } from 'react-router-dom'

// components
import Loading from '../../components/Loading/Loading'
import EditCarouselItem from '../../components/EditCarouselItem/EditCarouselItem'

// context
import {useLanguageValue} from '../../context/languageContext'




const Edit = () => {
    const {t} = useLanguageValue()


    const navigate = useNavigate()

    const { getVideos } = useFetchDocument()
    const carouselList = useRef(null)

    const [genderList, setGenderList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadVideos = async () => {
            const loadedVideos = await getVideos()

            setGenderList(loadedVideos)
            setLoading(false)
        }
        loadVideos()
    }, [getVideos])


    const handleScroll = (e, direction) => {
        e.preventDefault()
        if (direction === 'left') {
            let scrollValue = -e.currentTarget.nextElementSibling.children[0].offsetWidth
            let nextCarouselItem = e.currentTarget.nextElementSibling
            nextCarouselItem.scrollBy(scrollValue, 0)
        }
        if (direction === 'right') {
            let scrollValue = e.currentTarget.previousElementSibling.children[0].offsetWidth
            let previousCarouselItem = e.currentTarget.previousElementSibling
            previousCarouselItem.scrollBy(scrollValue, 0)
        }
    }

    return loading ? <Loading /> : (<div>
        <div className={styles.Edit}>
        <h1>{t('editingTitle')}</h1>
            <ul className={styles.carousel}>
                {genderList &&

                    genderList.map((list) => {
                        let currentGender = Object.keys(list)[0]

                        return (<li className={styles.carouselGender} key={currentGender}>
                            <h2>{currentGender}</h2>
                            <div className={styles.carouselWrapper}>
                                <button className={styles.leftButton} onClick={(e) => handleScroll(e, 'left')}>{'<'}</button>
                                <div className={styles.carouselList} >
                                    {list[currentGender].videos.map((video, index) => {
                                        return <EditCarouselItem
                                            key={video.videoName}
                                            name={video.videoName}
                                            link={video.linkVideo}
                                            thumb={video.thumbURL}
                                            ref={carouselList} 
                                            navigateLink={`/edit/${currentGender}/${index}`}/>
                                    })}
                                </div>
                                <button className={styles.rightButton} onClick={(e) => handleScroll(e, 'right')}>{'>'}</button>
                            </div>
                        </li>)

                    })
                }
            </ul>


        </div>
    </div>
    )
}

export default Edit