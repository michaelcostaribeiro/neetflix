import React from 'react'
// context
import { useLanguageValue } from '../../context/languageContext'

const MediumPlan = ({ styles }) => {
    const {t} = useLanguageValue()
    return (
        <>

            <div className={styles.planText}>
                <span>{t('mediumPlanPriceQuestion')}</span>
                <span>{t('mediumPlanPriceAnswer')}</span>
            </div>
            <div className={styles.planText}>
                <span>{t('mediumPlanQualityQuestion')}</span>
                <span>{t('mediumPlanQualityAnswer')}</span>
            </div>
            <div className={styles.planText}>
                <span>{t('mediumPlanFrequencyQuestion')}</span>
                <span>{t('mediumPlanFrequencyAnswer')}</span>
            </div>
            <div className={styles.planText}>
                <span>{t('mediumPlanAdQuestion')}</span>
                <span>{t('mediumPlanAdAnswer')}</span>
            </div>

        </>
    )
}

export default MediumPlan