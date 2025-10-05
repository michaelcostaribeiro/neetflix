import { useState } from 'react'
import styles from './Home.module.css'
import Carousel from '../../components/Carousel/Carousel'
import placeholder from '../../assets/logoIcon.png'


const Home = () => {
    const [email, setEmail] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className={'flex1'}>
            <div className="backgroundImage"></div>
            <div className={styles.Home + ' container'}>
                <div className={styles.getStarted}>
                    <h1>Assista a vídeos ilimitados e muito mais!</h1>
                    <p>Pronto para assistir? Coloque seu email abaixo e inicie imediatamente!</p>
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
                            value="Vamos lá!"
                            className='btn' />
                    </form>
                </div>
                <div className={styles.homeBody}>
                    <div className={styles.homeBodyCircle}></div>
                    <div className={styles.trendingSection + ' current-query container'}>
                        <h2>Em alta</h2>
                        <Carousel />
                    </div>
                    <div className={styles.servicesSection + ' current-query'}>
                        <h2>Mais motivos para usar o nosso serviço</h2>
                        <div className={styles.servicesContainer} >
                            <div>
                                <div className={styles.servicesText}>
                                    <h3>Aproveite na TV</h3>
                                    <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                                </div>
                                <img src={placeholder} alt="" />
                            </div>
                            <div>
                                <div className={styles.servicesText}>

                                <h3>Baixe séries para assistir offline</h3>
                                <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                                </div>
                                <img src={placeholder} alt="" />
                            </div>
                            <div>
                                <div className={styles.servicesText}>

                                <h3>Assista onde quiser</h3>
                                <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
                                </div>
                                <img src={placeholder} alt="" />
                            </div>
                            <div>
                                <div className={styles.servicesText}>

                                <h3>Crie perfis para crianças</h3>
                                <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                                </div>
                                <img src={placeholder} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.faqSection + ' current-query'}>
                        <h2>Perguntas Frequentes</h2>

                        <input type="radio" name="FAQ" id={styles.whatIs} />
                        <label htmlFor={styles.whatIs}>O que é o Neetflix?<span>+</span></label>
                        <p id={styles.whatIsText} className={styles.faqText}>Neetflix é um aplicativo que concentra seus vídeos favoritos do <b>Youtube</b>.</p>

                        <input type="radio" name="FAQ" id={styles.howMuch} />
                        <label htmlFor={styles.howMuch}>Quando custa o Neetflix?<span>+</span></label>
                        <p id={styles.howMuchText} className={styles.faqText}>O Neetflix é um aplicativo gratuito, mas você pode demonstrar apoio à plataforma do Youtube assinando o Youtube Premium.</p>

                        <input type="radio" name="FAQ" id={styles.whereWatch} />
                        <label htmlFor={styles.whereWatch}>Onde posso assistir?<span>+</span></label>
                        <p id={styles.whereWatchText} className={styles.faqText}>Você pode assistir em basicamente qualquer aplicativo com internet e um sistema operacional que possa acessar o site.</p>


                        <input type="radio" name="FAQ" id={styles.whatWatch} />
                        <label htmlFor={styles.whatWatch}>O que eu posso assistir na Netflix?<span>+</span></label>
                        <p id={styles.whatWatchText} className={styles.faqText}>Todos os seus canais favoritos do Youtube!</p>


                    </div>
                    <div className={styles.joinAgain + ' current-query'}>
                        <p>Quer assistir? Informe seu email para iniciar o seu cadastro ou reiniciar sua assinatura.</p>
                        <form className={styles.getStartedForm} onSubmit={(e) => handleSubmit(e)}>
                            <div className='inputContainer'>
                                <input
                                    name='joinAgainEmail'
                                    id='joinAgainEmail'
                                    type="email"
                                    value={email}
                                    placeholder=''
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor='joinAgainEmail'>Email</label>
                            </div>
                            <input
                                name='joinAgainSubmit'
                                id='joinAgainSubmit'
                                type="submit"
                                value="Vamos lá!"
                                className='btn' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home