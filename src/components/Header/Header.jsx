// css
import styles from './Header.module.css'

// firebase
import { auth } from '../../firebase/config'

// hooks
import { NavLink } from 'react-router-dom'
import useAuthentication from '../../hooks/useAuthentication'

// context
import { useAuthValue } from '../../context/authContext'

// images
import logoImg from '../../assets/logo.png'
import { useState } from 'react'
import Loading from '../Loading/Loading'
import { useLanguageValue } from '../../context/languageContext'



const Header = ({ admin = false, userLogout }) => {
  const user = useAuthValue()
  const { logout } = useAuthentication()
  const { lang, changeLanguage, t } = useLanguageValue()

  const [loading, setLoading] = useState(false)





  const handleLogout = () => {
    setLoading(true)
    userLogout(false)
    logout(auth)
    setLoading(false)
  }


  return loading ? <Loading /> : (
    <header className={styles.HeaderContainer}>
      <nav className={styles.Header}>
        <NavLink to='/' className={styles.logo}><img src={logoImg} alt="logo" /></NavLink>
        <div className={styles.HeaderButtons}>
          <select name="lang" id="lang" onChange={(e) => {
            console.log(e.target.value.toLowerCase())
            changeLanguage(e.target.value)
          }
          }>

            <option value="PT">PT</option>
            <option value="EN">EN</option>
          </select>
          {admin && <NavLink to={'/crud'} className={'btn'}>EDIT</NavLink>}
          {!user && <NavLink to={'/login'} className={'btn'}>{t('headerLoginButton')}</NavLink>}
          {user && <button className='btn' onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i></button>}
        </div>
      </nav>
    </header>
  )
}

export default Header