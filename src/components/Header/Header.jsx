import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import logoImg from '../../assets/logo.png'
import { useAuthValue } from '../../context/authContext'
import useAuthentication from '../../hooks/useAuthentication'
import { auth } from '../../firebase/config'

const Header = () => {
  const user = useAuthValue()
  const {logout} = useAuthentication()
  console.log(user)

  const handleLogout = () => {
    logout(auth)
  }

  return (
    <nav className={styles.Header}>
      <NavLink to='/' className={styles.logo}><img src={logoImg} alt="logo" /></NavLink>
      <div className={styles.HeaderButtons}>
        <select name="lang" id="lang">
          <option value="EN">EN</option>
          <option value="PT">PT</option>
        </select>
        {!user && <NavLink to={'/login'} className={'btn'}>Entrar</NavLink>}
        {user && <button className='btn' onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i></button>}

      </div>
    </nav>
  )
}

export default Header