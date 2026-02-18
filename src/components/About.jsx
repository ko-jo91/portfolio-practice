import React from 'react'
import { motion } from "motion/react"

const About = () => {

    let parent = {
        hidden: { opacity: 0, y: -90 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 1, ease: "easeOut", duration: 1.2 } }

    }
    let children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }



    return (
        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.3 }} className=' p-10 mb-20 space-y-7 flex flex-col justify-center items-center'>
            <motion.h1 variants={children} className='text-3xl'>About Me</motion.h1>
            <motion.h1 variants={children} className='text-2xl text-center'>As a Software Engineer focused on front-end development with React, I’m driven by a commitment to
                <br />
                performance and accessibility. I develop engaging, efficient web applications designed
                <br />
                to elevate the user experience and improve the web for everyone.</motion.h1>
        </motion.div>
    )
}

export default About
