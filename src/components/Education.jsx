import React from 'react'

function Education() {
  return (
    <div> 
        <div className='text-slate-400 text-5xl font-bold flex justify-center py-10'>
            Education
        </div>
        <div className='block md:flex md:justify-between lg:flex lg:justify-between'>
            <div className='p-4'>
                <img src="/college2.jpg" alt="college" width="500px"  style={{borderRadius : "10%"}} />
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
    </div>
  )
}

export default Education