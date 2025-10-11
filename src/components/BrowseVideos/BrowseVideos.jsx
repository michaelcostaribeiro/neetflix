import { useEffect, useRef, useState } from 'react'
import useFetchDocument from '../../hooks/useFetchDocument'
import styles from './BrowseVideos.module.css'
import Loading from '../Loading/Loading'
import CarouselItem from '../CarouselItem/CarouselItem'
import { useLanguageValue } from '../../context/languageContext'

const BrowseVideos = () => {
  const {lang} = useLanguageValue()
  
  const translatedGenre = (lang, genre) => {
      if(lang == 'en'){
        switch (genre){
          case 'Musica':
            return 'Music'
          case "Viagem":
            return 'Travel'
          default:
        }
      }
      return genre
  }

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
    if(direction === 'left'){
      let scrollValue = -e.currentTarget.nextElementSibling.children[0].offsetWidth
      let nextCarouselItem = e.currentTarget.nextElementSibling
      nextCarouselItem.scrollBy(scrollValue, 0)
    }
    if(direction === 'right'){
      let scrollValue = e.currentTarget.previousElementSibling.children[0].offsetWidth
      let previousCarouselItem = e.currentTarget.previousElementSibling
      previousCarouselItem.scrollBy(scrollValue, 0)
    }
  }

  return loading ? <Loading /> : (<div>
    <div className={styles.banner} alt="banner" />
    <div className={styles.BrowseVideos}>
      <ul className={styles.carousel}>
        {genderList &&

          genderList.map((list) => {
            let currentGender = Object.keys(list)[0]

            let genreToRender = translatedGenre(lang, currentGender)
            

            return (<li className={styles.carouselGender} key={currentGender}>
              <h2>{genreToRender}</h2>
              <div className={styles.carouselWrapper}>
                <button className={styles.leftButton} onClick={(e) => handleScroll(e,'left')}>{'<'}</button>
                <div className={styles.carouselList} >
                  {list[currentGender].videos.map((video) => {
                    return <CarouselItem key={video.videoName} name={video.videoName} link={video.linkVideo} thumb={video.thumbURL} ref={carouselList} />
                  })}
                </div>
                <button className={styles.rightButton} onClick={(e) => handleScroll(e, 'right') }>{'>'}</button>
              </div>
            </li>)

          })
        }
      </ul>


    </div>
  </div>
  )
}

export default BrowseVideos