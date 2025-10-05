import { useEffect, useState } from 'react'
import styles from './ChoosePlan.module.css'
import useFetchDocument from '../../hooks/useFetchDocument'
import Loading from '../../components/Loading/Loading'
import { useAuthValue } from '../../context/authContext'
import useAuthentication from '../../hooks/useAuthentication'
import FreePlan from '../../components/Plans/FreePlan'
import PremiumPlan from '../../components/Plans/PremiumPlan'
import MediumPlan from '../../components/Plans/MediumPlan'

const ChoosePlan = ({ setUserPlan }) => {
    const [currentPlan, setCurrentPlan] = useState('free-plan')
    const [hasPlan, setHasPlan] = useState(true)

    const { validatePlan } = useAuthentication()

    const { updatePlan } = useFetchDocument()
    const user = useAuthValue()
    useEffect(() => {

        const checkPlan = async () => {
            const isValid = await validatePlan();
            setHasPlan(isValid);
        };

        checkPlan();
    }, [user, validatePlan])

    const handleSubmit = (e) => {
        e.preventDefault()

        updatePlan(currentPlan, true)
        setUserPlan(true)
    }

    return hasPlan ? <Loading /> : (
        <div className='flex1'>
            <hr />
            <div className={styles.ChoosePlan + ' container current-query'}>
                <p>Passo <b>2</b> de <b>2</b></p>
                <h1>Escolha o melhor plano para você: </h1>
                <form onSubmit={handleSubmit}>
                    <fieldset name="plan" id="plan" className={styles.planSection}>
                        <input
                            type="radio"
                            name="plan"
                            id="free-plan"
                            value="free-plan"
                            checked={currentPlan === 'free-plan'}
                            onChange={(e) => setCurrentPlan(e.target.value)} />
                        <label htmlFor='free-plan' className={styles.shortInfo}>
                            <div>
                                <div className={styles.shortTextInfo}>
                                    <h2>Padrão</h2>
                                    <p>Contém anúncios.</p>
                                </div>
                                <i className="fa-solid fa-check"></i>
                                <div className={styles.planTextOnLabel}>
                                    <FreePlan styles={styles} />
                                </div>
                            </div>


                        </label>
                        <input
                            type="radio"
                            name="plan"
                            id="medium-plan"
                            value="medium-plan"
                            checked={currentPlan === 'medium-plan'}
                            onChange={(e) => setCurrentPlan(e.target.value)} />
                        <label className={styles.shortInfo} htmlFor='medium-plan'>
                            <div >
                                <div className={styles.shortTextInfo}>
                                    <h2>Membro</h2>
                                    <p>Sem anúncios em alguns canais</p>
                                </div>
                                <i className="fa-solid fa-check"></i>
                                <div className={styles.planTextOnLabel}>
                                    <MediumPlan styles={styles}/>
                                </div>
                            </div>
                        </label>




                        <input
                            type="radio"
                            name="plan"
                            id="premium-plan"
                            value="premium-plan"
                            checked={currentPlan === 'premium-plan'}
                            onChange={(e) => setCurrentPlan(e.target.value)} />
                        <label className={styles.shortInfo} htmlFor='premium-plan'>
                            <div >
                                <div className={styles.shortTextInfo}>
                                    <h2>Premium</h2>
                                    <p>Sem anúncio nenhum!</p>
                                </div>
                                <i className="fa-solid fa-check"></i>
                                <div className={styles.planTextOnLabel}>
                                    <PremiumPlan styles={styles}/>
                                </div>
                            </div>
                        </label>
                    </fieldset>
                    {currentPlan === 'free-plan' && <FreePlan styles={styles} />}
                    {currentPlan === 'medium-plan' && <MediumPlan styles={styles} />}
                    {currentPlan === 'premium-plan' && <PremiumPlan styles={styles}/>}

                    <input type="submit" value="Escolher plano" className={styles.botao + ' btn'} />
                </form>
            </div>
        </div>
    )
}

export default ChoosePlan