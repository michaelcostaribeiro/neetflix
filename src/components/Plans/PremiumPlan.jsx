import React from 'react'
// context
import { useLanguageValue } from '../../context/languageContext'

const PremiumPlan = ({ styles }) => {
    const {t} = useLanguageValue()

    return (
        <>
            <div className={styles.planText}>
                <span>{t('premiumPlanPriceQuestion')}</span>
                <span>{t('premiumPlanPriceAnswer')}</span>
            </div>
            <div className={styles.planText}>
                <span>{t('premiumPlanQualityQuestion')}</span>
                <span>{t('premiumPlanQualityAnswer')}</span>
            </div>
            <div className={styles.planText}>
                <span>{t('premiumPlanFrequencyQuestion')}</span>
                <span>{t('premiumPlanFrequencyAnswer')}</span>
            </div>
            <div className={styles.planText}>
                <span>{t('premiumPlanAdQuestion')}</span>
                <span>{t('premiumPlanAdAnswer')}</span>
            </div>
        </>
    )
}

export default PremiumPlan