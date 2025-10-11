// css
import styles from './Carousel.module.css'

// hooks
import { useEffect, useRef, useState } from 'react'

// images
import alanzoka from '../../assets/alanzoka.jpg'
import pato from '../../assets/patopapao.jpg'
import yoda from '../../assets/yoda.jpg'
import link from '../../assets/link.jpg'
import xarola from '../../assets/xarola.jpg'
import ponto from '../../assets/ponto.jpg'
import kripparrian from '../../assets/kripparrian.jpg'
import atila from '../../assets/atila.jpg'


const Carousel = () => {
  const caroulselRef = useRef(null)
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    const carouselElement = caroulselRef.current

    const handleScroll = (e) => {
      setScrollValue(e.target.scrollLeft)
    }

    carouselElement.addEventListener('scroll', handleScroll)
    return () => {
      carouselElement.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    const carouselElement = caroulselRef.current
    const maxScroll = carouselElement.scrollWidth - carouselElement.clientWidth

    const leftButton = carouselElement.previousElementSibling
    const rightButton = carouselElement.nextElementSibling


    const buttonDisabler = (item) => {
      item.disabled = true
    }
    const buttonEnabler = (item) => {
      item.disabled = false
    }

    if (scrollValue < 20) {
      buttonDisabler(leftButton)
    }else if (scrollValue > maxScroll-20){
      buttonDisabler(rightButton)
    }else{
      buttonEnabler(leftButton)
      buttonEnabler(rightButton)
    }
  }, [scrollValue])


  const scroll = async (e, direction) => {
    e.preventDefault()

    if (direction === 'left') {
      const carouselItemSize = e.target.nextElementSibling.firstElementChild.clientWidth
      caroulselRef.current.scrollBy(-carouselItemSize, 0)
    } else {
      const carouselItemSize = e.target.previousElementSibling.firstElementChild.clientWidth
      caroulselRef.current.scrollBy(carouselItemSize, 0)

    }

  }


  return (
    <div className={styles.CarouselWrapper}>
      <button  id='leftButton' className={styles.scroll} onClick={(e) => scroll(e, 'left')}>◀</button>
      <ul ref={caroulselRef} className={styles.Carousel}>
        <li><a href="https://www.youtube.com/@AtilaIamarino" target='_blank'><img src={atila} alt="Atila Iamarino" title='Atila Iamarino'/></a></li>

        <li><a href="https://www.youtube.com/@PontoemComum" target='_blank'><img src={ponto} title='Ponto em Comum
' alt="Ponto em Comum" /></a></li>

        <li><a href="https://www.youtube.com/@alanzoka" target='_blank'><img src={alanzoka} alt="alanzoka" title='alanzoka' /></a></li>

        <li><a href="https://www.youtube.com/@PatoPapao" target='_blank'><img src={pato} alt="Pato Papão" title='Pato Papão' /></a></li>

        <li><a href="https://www.youtube.com/@YodaSL" target='_blank'><img src={yoda} alt="Yoda SL" title='Yoda SL'/></a></li>

        <li><a href="https://www.youtube.com/@XAROLA" target='_blank'><img src={xarola} alt="XAROLA" title='XAROLA' /></a></li>

        <li><a href="https://www.youtube.com/c/QuadrinhosNaSarjeta" target='_blank'><img src={link} alt="Quadrinhos na Sarjeta" title='Quadrinhos na Sarjeta' /></a></li>

      </ul>
      <button  id='rightButton' className={styles.scroll + ' rightButton'} onClick={(e) => scroll(e, 'right')}>▶</button>
    </div>
  )
}

export default Carousel