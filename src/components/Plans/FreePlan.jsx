import React from 'react'
// context
import { useLanguageValue } from '../../context/languageContext'

const FreePlan = ({ styles }) => {
  const {t} = useLanguageValue()
  return (
    <>
      <div className={styles.planText}>
        <span>{t('freePlanPriceQuestion')}</span>
        <span>{t('freePlanPriceAnswer')}</span>
      </div>
      <div className={styles.planText}>
        <span>{t('freePlanQualityQuestion')}</span>
        <span>{t('freePlanQualityAnswer')}</span>
      </div>
      <div className={styles.planText}>
        <span>{t('freePlanFrequencyQuestion')}</span>
        <span>{t('freePlanFrequencyAnswer')}</span>
      </div>
      <div className={styles.planText}>
        <span>{t('freePlanAdQuestion')}</span>
        <span>{t('freePlanAdAnswer')}</span>
      </div>
    </>
  )
}

export default FreePlan