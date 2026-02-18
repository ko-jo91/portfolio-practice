import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Form from './components/Form'
import Reviews from './components/Reviews'

import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <div className='min-h-screen mx-auto py-4 bg-slate-100 dark:bg-slate-900 text-black dark:text-white'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/form' element={<Form />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </div>
  )
}

export default App
