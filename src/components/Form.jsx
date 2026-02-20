import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'motion/react'
import { Send } from "lucide-react"

const Form = () => {

    let schema = yup.object().shape({
        subject: yup.string().required('Enter Relevant Details'),
        email: yup.string().required('Enter Relevant Details'),
        name: yup.string().required('Enter Relevant Details')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })


    function onSubmit(data) {
        console.log(data)
    }

    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChilderen: 0.25, ease: "easOut", duration: 1.5 } }
    }
    let children = {
        hidden: { opacity: 0, y: -71 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='min-h-screen p-20 flex flex-col'>
            <motion.form variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className='max-w-5xl space-y-7' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='mb-10 text-5xl text-center sm:text-left font-bold'>Contact Me</h1>
                <div className='flex flex-col space-y-5 justify-center'>

                    <motion.div variants={children} className='flex items-center justify-between'><input className='w-full placeholder-slate-700 dark:placeholder-slate-300 text-sm sm:text-md px-5 shadow-lg border rounded-xl h-12' type="text" placeholder='Subject'{...register('subject')} /></motion.div>

                    <motion.div variants={children} className='flex flex-col space-y-5 md:grid grid-cols-2 sm:gap-3'>
                        <input className='placeholder-slate-700 dark:placeholder-slate-300 text-sm sm:text-md px-5 shadow-lg border rounded-xl h-12' type="email" placeholder='Your Email Address' {...register('email')} />
                        <input className='placeholder-slate-700 dark:placeholder-slate-300 text-sm sm:text-md px-5 shadow-lg border rounded-xl h-12' type="text" placeholder='Your Name' {...register('name')} />
                    </motion.div>
                </div>
                <motion.textarea variants={children} className='placeholder-slate-700 dark:placeholder-slate-300 text-sm sm:text-md shadow-lg px-5 pt-5 border rounded-xl resize-none w-full h-70' placeholder='Enter Message'></motion.textarea>
                <p className='text-red-500'>{errors.subject ?.message}</p>
                <div className='flex justify-center sm:justify-between'>
                    <motion.button variants={children} className='flex sm:flex justify-start bg-sky-500 px-3.5 py-2.5 rounded-lg text-white space-x-3'>
                        <Send />
                        <h1>Send Message</h1>
                    </motion.button>
                </div>
            </motion.form>
        </div>
    )
}

export default Form
