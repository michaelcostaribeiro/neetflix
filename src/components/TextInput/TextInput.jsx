// css
import styles from './TextInput.module.css'

const TextInput = ({id, value,setValue,labelText ='Email',type='email'}) => {
  return (
      <div className={styles.TextInput}>
          <input
              name={id}
              id={id}
              type={type}
              value={value}
              placeholder=''
              autoComplete='off'
              required
              onChange={(e) => setValue(e.target.value)} />
          <label htmlFor={id}>{labelText}</label>
      </div>
  )
}

export default TextInput