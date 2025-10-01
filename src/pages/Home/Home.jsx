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
                <div className={styles.getStarted + ' current-query'}>
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
                        <div>
                            <h3>Aproveite na TV</h3>
                            <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                            <img src={placeholder} alt="" />
                        </div>

                        <div>
                            <h3>Baixe séries para assistir offline</h3>
                            <p>Salve seus títulos favoritos e sempre tenha algo para assistir.</p>
                            <img src={placeholder} alt="" />
                        </div>

                        <div>
                            <h3>Assista onde quiser</h3>
                            <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
                            <img src={placeholder} alt="" />
                        </div>

                        <div>
                            <h3>Crie perfis para crianças</h3>
                            <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                            <img src={placeholder} alt="" />
                        </div>
                    </div>
                    <div className={styles.faqSection + ' current-query'}>
                        <h2>Perguntas Frequentes</h2>
                        <button>O que é o Neetflix?<span>+</span></button>
                        <button>Quando custa o Neetflix?<span>+</span></button>
                        <button>Onde posso assistir?<span>+</span></button>
                        <button>Como faço para cancelar?<span>+</span></button>
                        <button>O que eu posso assistir na Netflix?<span>+</span></button>
                        <button>Criança pode assistir a Neetflix?<span>+</span></button>
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