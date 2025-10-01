import { useState } from 'react'
import styles from './ChoosePlan.module.css'
import useFetchDocument from '../../hooks/useFetchDocument'

const ChoosePlan = ({setPlan}) => {
    const [currentPlan, setCurrentPlan] = useState('free-plan')
    const { updatePlan } = useFetchDocument()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        updatePlan(currentPlan,true)
        setPlan(true)
    }

    return (
        <div className='flex1'>
            <hr />
            <div className={styles.ChoosePlan + ' container current-query'}>
                <p>Passo <b>2</b> de <b>2</b></p>
                <h1>Escolha o melhor plano para você: </h1>
                <form onSubmit={handleSubmit}>
                    <fieldset name="plan" id="plan" className={styles.planSection}>
                        <label >
                            <input
                                type="radio"
                                name="plan"
                                id="free-plan"
                                value="free-plan"
                                checked={currentPlan === 'free-plan'}
                                onChange={(e) => setCurrentPlan(e.target.value)} />
                            <div className={styles.shortInfo}>
                                <div className={styles.shortTextInfo}>
                                    <h2>Padrão</h2>
                                    <p>1080p</p>
                                </div>
                                <i className="fa-solid fa-check"></i>
                            </div>

                        </label>
                        <label >
                            <input
                                type="radio"
                                name="plan"
                                id="medium-plan"
                                value="medium-plan"
                                checked={currentPlan === 'medium-plan'}
                                onChange={(e) => setCurrentPlan(e.target.value)} />
                            <div className={styles.shortInfo}>
                                <div className={styles.shortTextInfo}>
                                    <h2>Médio</h2>
                                    <p>1080p</p>
                                </div>
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </label>
                        <label >
                            <input 
                            type="radio" 
                            name="plan" 
                            id="premium-plan" 
                            value="premium-plan" 
                                checked={currentPlan === 'premium-plan'}
                            onChange={(e) => setCurrentPlan(e.target.value)} />
                            <div className={styles.shortInfo}>
                                <div className={styles.shortTextInfo}>
                                    <h2>Premium</h2>
                                    <p>1080p</p>
                                </div>
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </label>
                    </fieldset>
                    {currentPlan === 'free-plan' && <p>plano gratuito selecionado</p>}
                    {currentPlan === 'medium-plan' && <p> plano medium selecionado</p>}
                    {currentPlan === 'premium-plan' && <p> plano premium selecionado</p>}

                    <input type="submit" value="Escolher plano" className={styles.botao + ' btn'} />
                </form>
            </div>
        </div>
    )
}

export default ChoosePlan