import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import Properties from '../pages/Properties'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} /> 
        <Route path='/about' element={<Header />} />
        <Route path='/signin' element={<Header />} />
        <Route path='/profile' element={<Header />} />
        <Route path='/properties' element={<Header />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </>
  )
}

export default AppRoutes
