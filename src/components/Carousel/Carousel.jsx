// css
import styles from './Carousel.module.css'

// hooks
import { useEffect, useRef, useState } from 'react'


const Carousel = () => {
  const caroulselRef = useRef(null)
  const leftButton = useRef(null)
  const rightButton = useRef(null)
  const [scrollValue, setScrollValue] = useState(0)

  const currentEM = 8 * 16
  const currentGap = 2 * 16

  

  useEffect(() => {
    const carouselElement = caroulselRef.current
    
    const handleScroll = (e) =>{
      console.log(e.target.scrollLeft)
      setScrollValue(e.target.scrollLeft)
    }

    carouselElement.addEventListener('scroll', handleScroll)
    return () => {
      carouselElement.removeEventListener('scroll', handleScroll)
    }

  },[])

  useEffect(()=>{
    const maxScroll = caroulselRef.current.scrollWidth - caroulselRef.current.clientWidth
    const buttonDisabler = (item) =>{
      item.disabled = true
    }
    const buttonEnabler = (item) => {
      item.disabled = false
    }
    if (scrollValue < currentEM + currentGap){
      buttonDisabler(leftButton.current)
    } else if (scrollValue > maxScroll - (currentEM+currentGap)){
      buttonDisabler(rightButton.current)
    }else{
      buttonEnabler(leftButton.current)
      buttonEnabler(rightButton.current)
    }
  }, [scrollValue, currentEM,currentGap])


  const scroll = async  (e,direction) =>{
    e.preventDefault()
    const carouselElement = caroulselRef.current
    const maxScroll = carouselElement.scrollWidth - carouselElement.clientWidth
    const regularScroll = 160
    const largerScroll = 240

    if(direction === 'left'){
      if (scrollValue < largerScroll){
        carouselElement.scrollBy(-largerScroll, 0)
      }else{
        carouselElement.scrollBy(-regularScroll, 0)
      }
    }else {
      if (scrollValue >  maxScroll-largerScroll) {
        carouselElement.scrollBy(largerScroll, 0)
      } else {
        carouselElement.scrollBy(regularScroll, 0)
      }
    }
    
  }


  return (
    <div className={styles.CarouselWrapper}>
      <button ref={leftButton} id='leftButton' className={styles.scroll} onClick={(e) => scroll(e, 'left')}>◀</button>
      <ul ref={caroulselRef} className={styles.Carousel}>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
            <li>Item5</li>
            <li>Item6</li>
            <li>Item7</li>
        </ul>
      <button ref={rightButton} id='rightButton' className={styles.scroll+ ' rightButton'} onClick={(e) => scroll(e, 'right')}>▶</button>
    </div>
  )
}

export default Carousel