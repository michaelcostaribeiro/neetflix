import React from 'react'

const FreePlan = ({ styles }) => {
  return (
    <>
      <div className={styles.planText}>
        <span>Preço mensal</span>
        <span>R$0,00</span>
      </div>
      <div className={styles.planText}>
        <span>Qualidade de vídeo e áudio</span>
        <span>Boa</span>
      </div>
      <div className={styles.planText}>
        <span>Frequência de anúncios:</span>
        <span>Alta</span>
      </div>
      <div className={styles.planText}>
        <span>Canais com anúncios:</span>
        <span>Todos canais parceiros</span>
      </div>
    </>
  )
}

export default FreePlan