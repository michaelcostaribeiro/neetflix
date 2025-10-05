import React from 'react'

const MediumPlan = ({ styles }) => {
    return (
        <>

            <div className={styles.planText}>
                <span>Preço mensal</span>
                <span>R$4,90</span>
            </div>
            <div className={styles.planText}>
                <span>Qualidade de vídeo e áudio</span>
                <span>Boa</span>
            </div>
            <div className={styles.planText}>
                <span>Frequência de anúncios:</span>
                <span>Média</span>
            </div>
            <div className={styles.planText}>
                <span>Canais com anúncios:</span>
                <span>Canais sem ter membro</span>
            </div>

        </>
    )
}

export default MediumPlan