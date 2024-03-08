import React from 'react'
import Home from '../components/Home/Home'
import Features from '../components/Features/Features'
import Pricing from '../components/Pricing/Pricing'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Profile from '../components/Profile'

const index = () => {
  return (
    <div>
     <BrowserRouter>
     
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Features' element={<Features/>}/>
       <Route path='/Profile' element={<Profile/>}/>
       <Route path='/Pricing/:name' element={<Pricing/>}/>
       <Route path='/*' element={<Navigate to='/'/>}/>
     </Routes>
     
    </BrowserRouter> 
    </div>
  )
}

export default index
