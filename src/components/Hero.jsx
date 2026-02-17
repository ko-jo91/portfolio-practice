import React from 'react'
import { motion } from 'motion/react'
import Profile from '../assets/bus.jpeg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <motion.div initial={{opacity:0, y:-60}} animate={{opacity:1, y:0}} transition={{duration:0.9, ease:'easeInOut'}} className='flex flex-col-reverse p-10 mt-15 md:flex-row justify-center items-center md:min-h-screen md:mt-0 space-x-25'>
            <div className='space-y-2 text-center ml-25 md:text-left'>
                <h1 className='text-5xl mb-5 md:text-6xl lg:text-8xl'>Hi, I'm Kojo</h1>
                <h2 className='text-2xl mb-4 md:text-3xl lg:text-4xl'>Software Engineer</h2>
                <h2 className='text-lg md:text-xl lg:text-2xl mb-23'>Expert In Web and Software Development.</h2>
                <NavLink to={'/contact'}><motion.button whileHover={{scale: 1.2, y:-2}} whileTap={{scale: 0.9, y:-2}} transition={{type:"spring", stiffness:450, damping:10}} className='cursor-pointer list-none bg-sky-400 dark:bg-emerald-400 px-6 py-4 rounded w-40 text-center'>Lets Connect</motion.button></NavLink>
            </div>
            <div>
                <img className='shadow-2xl  dark:shadow-white  hover:scale-110 transition-all ease-linear duration-200 w-40 h-auto mb-7 sm:w-60 md:w-70 lg:w-90 object-cover rounded-full' src={Profile} alt="profile-pic" />
            </div>
        </motion.div>
    )
}

export default Hero
