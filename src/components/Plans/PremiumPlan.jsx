import React from 'react'

const PremiumPlan = ({ styles }) => {
    return (
        <>
            <div className={styles.planText}>
                <span>Preço mensal</span>
                <span>R$26,90</span>
            </div>
            <div className={styles.planText}>
                <span>Qualidade de vídeo e áudio</span>
                <span>Ótima</span>
            </div>
            <div className={styles.planText}>
                <span>Frequência de anúncios:</span>
                <span>Nenhuma</span>
            </div>
            <div className={styles.planText}>
                <span>Canais com anúncios:</span>
                <span>Nenhum</span>
            </div>
        </>
    )
}

export default PremiumPlan