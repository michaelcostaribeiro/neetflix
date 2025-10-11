// css
import './App.css';

// pages
import Login from './pages/Login/Login';
import Browse from './pages/Browse/Browse'
import CreateProfile from './pages/CreateProfile/CreateProfile'

// components
import Register from './pages/Register/Register';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// firebase
import { auth, db } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

// hooks
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// context
import { AuthProvider } from './context/authContext'
import EditVideos from './pages/EditVideos/EditVideos';
import Loading from './components/Loading/Loading';
import RouteHandler from './components/RouteHandler/RouteHandler';
import Edit from './pages/Edit/Edit';
import EditPage from './pages/EditPage/EditPage';
import { LanguageProvider } from './context/languageContext';


function App() {
  const [user, setUser] = useState(undefined)
  const [userPlan, setUserPlan] = useState(false)
  const [userAuthentication] = useState(auth)

  const [isAdmin, setIsAdmin] = useState(false)

  const [loading, setLoading] = useState(true)
  const [authLoaded, setAuthLoaded] = useState(false)



  useEffect(() => {

    onAuthStateChanged(userAuthentication, (user) => {
      setUser(user)
      setAuthLoaded(true)
    })

  }, [userAuthentication])

  useEffect(() => {
    if (!authLoaded) return
    if (user) {
      if (user.uid === 'MN9AnoO2qUWl8XM5564rjVzbkc52') {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }else{
      setIsAdmin(false)
    }

    const validatePlan = async () => {

      if (user) {
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        const res = docSnap.data()

        if (res['free-plan'] === true || res['medium-plan'] === true || res['premium-plan'] === true) {
          setUserPlan(true)
        } else {
          setUserPlan(false)
        }
      } else {
        setUserPlan(false)
      }
      setLoading(false)
    }
    validatePlan()
  }, [user, authLoaded])



  return (
    <>
      {loading ? <Loading/> : (
      <AuthProvider value={user}>
        <LanguageProvider >
          <BrowserRouter>
            {user ? <Header admin={isAdmin} userLogout={setUser} /> : <Header />}
            <Routes>
              <Route path='/' element={<RouteHandler user={user} userPlan={userPlan} setUserPlan={setUserPlan} />} />
              <Route path='/login' element={user ? <Navigate to={'/'} /> : <Login />} />
              <Route path='/crud' element={isAdmin ? <EditVideos /> : <Navigate to={'/'} /> } />
              <Route path='/edit' element={isAdmin ? <Edit /> : <Navigate to={'/'} /> } />
              <Route path='/edit/:genre/:index' element={isAdmin ? <EditPage /> : <Navigate to={'/'} /> } />
              <Route path='/register' element={user ? <Navigate to={'/'} /> : <Register />} />
              <Route path='/browse' element={userPlan ? <Browse /> : <Navigate to={'/'} />} />
              <Route path='/createProfile' element={userPlan ? <CreateProfile /> : <Navigate to={'/'} /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
          <div className='background'></div>

          </LanguageProvider>
        </AuthProvider >) 
        }
    </>
  );
}

export default App;
