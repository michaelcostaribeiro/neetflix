import { AuthProvider } from './context/authContext'
import { auth, db } from './firebase/config'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import ChoosePlan from './pages/ChoosePlan/ChoosePlan'
import Browse from './pages/Browse/Browse'

function App() {
  const [user, setUser] = useState(undefined)
  const [userPlan, setUserPlan] = useState(false)
  const [userAuthentication] = useState(auth)

  useEffect(() => {
    onAuthStateChanged(userAuthentication, (user) => {
      setUser(user)
    })
  }, [userAuthentication])

  useEffect(()=>{
    const validatePlan = async () => {
      if (user){
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        const res = docSnap.data()

        if(res['free-plan'] === true || res['medium-plan'] === true ||  res['premium-plan'] === true){
          setUserPlan(true)
          console.log('tem plano')
        }else{
          setUserPlan(false)
          console.log('não tem plano')
        }
      }else{
        setUserPlan(false)
      }
    }
    validatePlan()

  },[user])


  return (
    <AuthProvider value={user}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={user ? userPlan ? <Navigate to={'/browse'} /> : <ChoosePlan setPlan={setUserPlan}/> :<Home />} />
          <Route path='/browse' element={user ? userPlan ? <Browse /> : <Navigate to={'/'} /> : <Navigate to={'/'} />} />
          <Route path='/login' element={user ? <Navigate to={'/'}/> :<Login />} />
          <Route path='/register' element={user ? <Navigate to={'/'}/> :<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className='background'></div>
    </AuthProvider>
  );
}

export default App;
