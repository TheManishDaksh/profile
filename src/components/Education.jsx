import React from 'react';
import {motion} from "motion/react"

function Education() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
    > 
        <div className='text-slate-400 text-5xl font-bold flex justify-center py-10'>
            Education
        </div>
        <div className='block md:flex md:justify-between lg:flex lg:justify-between'>
            <div className='p-4'>
                <img src="/college2.jpg" alt="college" className='w-[500px] rounded-2xl' />
            </div>
            <div className='p-4'>
                <div className='text-slate-300 text-3xl font-bold'
                >Academic</div>
                <div className='text-slate-400 text-lg font-semibold'>
                    <div className='py-4'>
                        I am currently pursuing Bachelor of Arts from Subharti University, with an expected graduation in 2025. 
                    </div>
                    <div>
                    Before my graduation, I completed my 12th grade in 2021, specializing in Physics, Chemistry, and Biology (PCB), securing 77% marks.
                    </div>
                    </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Education