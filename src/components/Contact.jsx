import React from 'react'
import { motion } from 'motion/react'

function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
    >
    <div className='border-t-2 border-slate-700 py-4'>
        <div className='flex items-center flex-col'>
        <div className='text-slate-200 font-bold py-4'>
            Let's Build Together
        </div>
        <div className=' rounded-3xl border-2 text-slate-400 border-slate-700 w-[130px]  shadow-white shadow font-bold transition-transform duration-400 hover:-translate-y-4 hover:text-sky-300 hover:shadow-2xl'> 
         <button onClick={() => window.location.href = "mailto:manishk78265@gmail.com"}
         className=' py-2 px-2 text-lg cursor-pointer flex gap-2 '>
            <span><img src="/gmail.png" alt="manishk78625@gmail.com" width="40px" /></span> 
            <span>Contact</span>
             </button>
        </div>
        </div>
        <div className='text-sky-500 font-bold flex justify-center pt-20 '>
            [ Made by Manish Kumar ]
        </div>
    </div>
    </motion.div>
  )
}

export default Contact