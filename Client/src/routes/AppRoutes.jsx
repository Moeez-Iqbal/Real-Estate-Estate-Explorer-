import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header'
import Footer from '../components/Footer'

function AppRoutes() {
  return (
    <>
    
       <Header/>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
     <Footer />
    </>
  )
}

export default AppRoutes
