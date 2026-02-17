import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { Menu, Moon, X } from 'lucide-react'
import useMenu from './useMenu'


const NavBar = () => {
  // let [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  function handleTheme() {
    document.body.classList.toggle("dark")
  }

  let [mobileMenuIsOpen, toggle] = useMenu()

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -71 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <div className='sticky z-5 top-3 backdrop-blur-sm border rounded mx-5 flex justify-between items-center px-5 py-2 shadow-2xl dark:shadow-none'>
        <NavLink to={'/'}><h1 className='text-lg hover:scale-115 transition-all ease-in-out duration-400'>Kojo Acquah<span className='text-lg sm:text-xl lg:text-2xl text-sky-700 dark:text-sky-300 hover:scale-115 transition-all ease-in-out duration-400'>Addo</span></h1></NavLink>
        <div className='flex space-x-3 sm:space-x-5 md:space-x-7 lg:space-x-10'>
          <ul className='hidden text-lg sm:flex space-x-4 sm:space-x-5 md:space-x-10 tracking-tight items-center'>
            <NavLink to={'/'}><li className='hover:scale-115 transition-all ease-in-out duration-400'>Home</li></NavLink>
            <NavLink to={'/portfolio'}><li className='hover:scale-115 transition-all ease-in-out duration-400'>Portfolio</li></NavLink>
            <NavLink to={'/contact'}><li className='hover:scale-115 transition-all ease-in-out duration-400'>Contact</li></NavLink>
          </ul>
          <div className=' flex space-x-2 items-center'>
            <button className='cursor-pointer' onClick={toggle}>
              {mobileMenuIsOpen ? <X className='sm:hidden flex w-5 h-5 cursor-pointer hover:scale-115 transition-all ease-in-out duration-400' /> : <Menu className='sm:hidden flex w-5 h-5 cursor-pointer hover:scale-115 transition-all ease-in-out duration-400' />}
            </button>
            <Moon className='sm:flex w-5 h-5 cursor-pointer hover:scale-115 transition-all ease-in-out duration-400' onClick={handleTheme} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuIsOpen && <motion.ul variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: -70 }} className='sm:hidden fixed z-5 top-10  backdrop-blur-sm flex flex-col b p-2 space-x-3 space-y-1 mx-5 mt-5 mb-7'>

          <NavLink to={'/'}><motion.li variants={children} className='text-sm tracking-tight' onClick={() => setMobileMenuIsOpen(false)}>Home</motion.li></NavLink>

          <NavLink to={'/portfolio'}><motion.li variants={children} className='text-sm tracking-tight' onClick={() => setMobileMenuIsOpen(false)}>Portfolio</motion.li></NavLink>

          <NavLink to={'/contact'}><motion.li variants={children} className='text-sm tracking-tight' onClick={() => setMobileMenuIsOpen(false)}>Contact</motion.li></NavLink>
        </motion.ul>}
      </AnimatePresence>

    </>

  )
}

export default NavBar
