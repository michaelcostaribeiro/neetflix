// css
import styles from './Home.module.css'

// hooks
import { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import Carousel from '../../components/Carousel/Carousel'

// context
import { useLanguageValue } from '../../context/languageContext'

// assets
import placeholder from '../../assets/logoIcon.png'


const Home = () => {
    const {t} = useLanguageValue()

    const [email, setEmail] = useState('')
    const [secondEmail, setSecondEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className={'flex1'}>
            <div className="backgroundImage"></div>
            <div className={styles.Home + ' container'}>
                <div className={styles.getStarted}>
                    <h1>{t('homeHeroTitle')}</h1>
                    <p>{t('homeHeroSubTitle')}</p>
                    <form className={styles.getStartedForm} onSubmit={(e) => handleSubmit(e)}>
                        <div className='inputContainer'>
                            <input
                                name='emailText'
                                id='emailText'
                                type="email"
                                value={email}
                                placeholder=''
                                onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor='emailText'>Email</label>
                        </div>
                        <input
                            name='emailSubmit'
                            id='emailSubmit'
                            type="submit"
                            value=""
                            className='btn' 
                            />
                        <Link to={'./register'} state={{ initialemail: email }} className='btn' >{t('homeHeroButton')}</Link>
                    </form>
                </div>
                <div className={styles.homeBody}>
                    <div className={styles.homeBodyCircle}></div>
                    <div className={styles.trendingSection + ' current-query container'}>
                        <h2>{t('homeTrendingTitle')}</h2>
                        <Carousel />
                    </div>
                    <div className={styles.servicesSection + ' current-query'}>
                        <h2>{t('homeServicesH2')}</h2>
                        <div className={styles.servicesContainer} >
                            <div>
                                <div className={styles.servicesText}>
                                    <h3>{t('homeServicesTitle1')}</h3>
                                    <p>{t('homeServicesP1')}</p>
                                </div>
                                <img src={placeholder} alt="Neetflix Icon" />
                            </div>
                            <div>
                                <div className={styles.servicesText}>

                                    <h3>{t('homeServicesTitle2')}</h3>
                                    <p>{t('homeServicesP2')}</p>
                                </div>
                                <img src={placeholder} alt="Neetflix Icon" />
                            </div>
                            <div>
                                <div className={styles.servicesText}>

                                    <h3>{t('homeServicesTitle3')}</h3>
                                    <p>{t('homeServicesP3')}</p>
                                </div>
                                <img src={placeholder} alt="Neetflix Icon" />
                            </div>
                            <div>
                                <div className={styles.servicesText}>

                                    <h3>{t('homeServicesTitle4')}</h3>
                                    <p>{t('homeServicesP4')}</p>
                                </div>
                                <img src={placeholder} alt="Neetflix Icon" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.faqSection + ' current-query'}>
                        <h2>{t('homeFAQh2')}</h2>

                        <input type="radio" name="FAQ" id={styles.whatIs} />
                        <label htmlFor={styles.whatIs}>{t('homeFAQlabel1')}<span>+</span></label>
                        <p id={styles.whatIsText} className={styles.faqText}>{t('homeFAQP1')}</p>

                        <input type="radio" name="FAQ" id={styles.howMuch} />
                        <label htmlFor={styles.howMuch}>{t('homeFAQlabel2')}<span>+</span></label>
                        <p id={styles.howMuchText} className={styles.faqText}>{t('homeFAQP2')}</p>

                        <input type="radio" name="FAQ" id={styles.whereWatch} />
                        <label htmlFor={styles.whereWatch}>{t('homeFAQlabel3')}<span>+</span></label>
                        <p id={styles.whereWatchText} className={styles.faqText}>{t('homeFAQP3')}</p>


                        <input type="radio" name="FAQ" id={styles.whatWatch} />
                        <label htmlFor={styles.whatWatch}>{t('homeFAQlabel4')}<span>+</span></label>
                        <p id={styles.whatWatchText} className={styles.faqText}>{t('homeFAQP4')}</p>


                    </div>
                    <div className={styles.joinAgain + ' current-query'}>
                        <p>{t('homeJoinAgainP')}</p>
                        <form className={styles.getStartedForm} onSubmit={(e) => handleSubmit(e)}>
                            <div className='inputContainer'>
                                <input
                                    name='joinAgainEmail'
                                    id='joinAgainEmail'
                                    type="email"
                                    value={secondEmail}
                                    placeholder=''
                                    onChange={(e) => setSecondEmail(e.target.value)} />
                                <label htmlFor='joinAgainEmail'>Email</label>
                            </div>
                            <Link to={'./register'} state={{ initialemail: secondEmail }} className='btn' >{t('homeHeroButton')}</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home