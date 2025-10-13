// css
import styles from './ChoosePlan.module.css'

// hooks
import { useEffect, useState } from 'react'
import useFetchDocument from '../../hooks/useFetchDocument'
import useAuthentication from '../../hooks/useAuthentication'

// components
import Loading from '../../components/Loading/Loading'
import FreePlan from '../../components/Plans/FreePlan'
import MediumPlan from '../../components/Plans/MediumPlan'
import PremiumPlan from '../../components/Plans/PremiumPlan'

// context
import { useAuthValue } from '../../context/authContext'
import { useLanguageValue } from '../../context/languageContext'



const ChoosePlan = ({ setUserPlan }) => {
    const {t} = useLanguageValue()

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
                <p>{t('chooseP1')}</p>
                <h1>{t('chooseH1')}</h1>
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
                                    <h2>{t('chooseFreePlanH2')}</h2>
                                    <p>{t('chooseFreePlanP')}</p>
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
                                    <h2>{t('chooseMediumPlanH2')}</h2>
                                    <p>{t('chooseMediumPlanP')}</p>
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
                                    <h2>{t('choosePremiumPlanH2')}</h2>
                                    <p>{t('choosePremiumPlanP')}</p>
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

                    <input type="submit" value={t('choosePlanButton')} className={styles.botao + ' btn'} />
                </form>
            </div>
        </div>
    )
}

export default ChoosePlan