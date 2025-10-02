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



const Header = ({ admin = false, userLogout }) => {
  const user = useAuthValue()
  const { logout } = useAuthentication()

  const [loading, setLoading] = useState(false)




  const handleLogout = () => {
    setLoading(true)
    userLogout(false)
    logout(auth)
    setLoading(false)
  }


  return loading ? <Loading/> : (
    <nav className={styles.Header}>
      <NavLink to='/' className={styles.logo}><img src={logoImg} alt="logo" /></NavLink>
      <div className={styles.HeaderButtons}>
        <select name="lang" id="lang">
          <option value="EN">EN</option>
          <option value="PT">PT</option>
        </select>
        {admin && <NavLink to={'/crud'} className={'btn'}>EDIT</NavLink>}
        {!user && <NavLink to={'/login'} className={'btn'}>Entrar</NavLink>}
        {user && <button className='btn' onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i></button>}

      </div>
    </nav>
  )
}

export default Header