import React from 'react'

function Hero() {

  return (
   <div className='flex justify-between py-20'>
    <div className='bg-sky-300 rounded-full shadow-blue-50 shadow-2xl transition-transform duration-200  hover:-translate-y-4 cursor-pointer hover:rotate-y-180'>
        <img src="../../public/pfp.jpg" alt="profile image" width="250px" style={{borderRadius:"50%"}}/>
    </div>
     <div className='text-slate-400 flex  flex-col items-center '> 
        <div className='font-extrabold text-6xl'>
        Hi, I'm <span className='transition-colors duration-300 hover:bg-[#a855f7] hover:text-white px-1 rounded-2xl'>MANISH</span>
        </div>
        <div className='font-bold text-3xl pt-4 pb-2 '>
        <span>A </span> <span className='transition-colors duration-300 hover:bg-[#a855f7] hover:text-white px-2  rounded-2xl'>React-JS</span> developer
        </div>
        <div className='text-slate-300 text-3xl font-bold pb-2'>
        building seamless interfaces
        </div>
        <div className='text-slate-300 text-3xl font-bold'>
            and functionalities
        </div>
        <div className='py-6'>
            <button className='py-2 px-6 rounded-full border-slate-500 border-2 text-2xl font-bold text-slate-200 transition-colors duration-300 hover:text-sky-300 cursor-pointer shadow shadow-white'
            >Resume</button>
        </div>
        <div className='flex gap-2' >
            <span 
            className='border-2 border-slate-500 p-1 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-4 shadow-white shadow-2xl hover:rotate-y-180'>
                <img src="../../public/github.png" alt="github" width="60px"/>
            </span>
            <span className='border-2 border-slate-500 p-1 rounded-full bg-white cursor-pointer transition-transform duration-400 hover:-translate-y-4 shadow-white shadow-2xl hover:rotate-y-180'> 
                <img src="../../public/twitter.png" alt="x" width="60px" style={{borderRadius: "60%"}}/>
            </span>
            <span className='border-2 border-slate-500 p-1 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-4 shadow-white shadow-2xl hover:rotate-y-180'> 
                <img src="../../public/linkedin.png" alt="linkedIn" width="60px" style={{borderRadius: "50%"}} />
            </span>
        </div>
    </div>
   </div>
  )
}

export default Hero