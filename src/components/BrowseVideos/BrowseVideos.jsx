import { useEffect, useState } from 'react'
import useFetchDocument from '../../hooks/useFetchDocument'
import styles from './BrowseVideos.module.css'
import Loading from '../Loading/Loading'
import CarouselItem from '../CarouselItem/CarouselItem'

const BrowseVideos = () => {

  const { getVideos } = useFetchDocument()

  const [genderList, setGenderList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadVideos = async () => {
      const loadedVideos = await getVideos()

      setGenderList(loadedVideos)
      console.log('videos: ', genderList)
      setLoading(false)
    }
    loadVideos()
  }, [getVideos])




  return loading ? <Loading /> : (<div>
    <div className={styles.banner} alt="banner" />
    <div className={styles.BrowseVideos}>
      <ul className={styles.carousel}>
        {genderList &&

          genderList.map((list) => {
            let currentGender = Object.keys(list)[0]

            return (<li className={styles.carouselGender} key={currentGender}>
              <h2>{currentGender}</h2>
              <div className={styles.carouselWrapper}>
                <button className={styles.leftButton}>{'<'}</button>
                <div className={styles.carouselList}>
                  {list[currentGender].videos.map((video) => {
                    return <CarouselItem key={video.videoName} name={video.videoName} link={video.linkVideo} thumb={video.thumbURL} />
                  })}
                </div>
                <button className={styles.rightButton}>{'>'}</button>
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