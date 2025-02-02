import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center py-8 md:flex-row md:justify-between md:py-10 lg:py-20'>

      <div className='w-[200px] lg:w-[250px] lg:bg-sky-300 lg:rounded-4xl bg-sky-300 rounded-full shadow-2xl  shadow-blue-50 
        transition-transform duration-200 hover:-translate-y-4 hover:rotate-y-180 cursor-pointer overflow-hidden'>
        <img 
          src="/pfp.jpg" 
          alt="profile image" 
          className='w-full h-full rounded-full'
        />
      </div>

      <div className='text-slate-400 flex flex-col items-center py-8'> 

        <div className='font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center'>
          Hi, I'm{' '}
          <span className='transition-colors ease-in duration-300 hover:bg-[#9136e6] hover:text-white px-1 rounded-2xl'>
            MANISH
          </span>
        </div>

        <div className='font-bold text-2xl sm:text-3xl pt-4 pb-2 text-slate-400 text-center'>
          <span>A </span>
          <span className='bg-[#9136e6] text-white px-2 rounded-2xl'>React-JS</span>
          {' '}developer
        </div>

        <div className='text-center'>
          <span className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
            building seamless interfaces
          </span>
          <span className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pl-2'>
            and functionalities
          </span>
        </div>

        <div className='py-6'>
          <button className='py-2 px-6 rounded-full border-slate-500 border-2 text-xl sm:text-2xl 
            font-bold text-slate-200 transition-transform duration-300 hover:-translate-y-4 
            hover:text-sky-300 cursor-pointer shadow shadow-white'>
            <a href="https://drive.google.com/file/d/1pwbvkF9A3xwx8Lxgb9MGiFnwysteHrCr/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
          </button>
        </div>

        <div className='flex gap-4'> 
          <a 
            href="https://github.com/TheManishDaksh" 
            target="_blank" 
            rel="noopener noreferrer"
            className='block border-2 border-slate-500 p-1 rounded-full cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'
          >
            <img src="/github.png" alt="github" className='w-[50px] sm:w-[60px]'/>
          </a>

          <a 
            href="https://x.com/manish_dakshh" 
            target="_blank" 
            rel="noopener noreferrer"
            className='block border-2 border-slate-500 p-1 rounded-full bg-white cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'
          > 
            <img src="/twitter.png" alt="x" className='w-[50px] sm:w-[60px] rounded-[60%]'/>
          </a>

          <a 
            href="https://www.linkedin.com/in/manish-kumar-262846252" 
            target="_blank" 
            rel="noopener noreferrer"
            className='block border-2 border-slate-500 p-1 rounded-full cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'
          >
            <img src="/linkedin.png" alt="linkedIn" className='w-[50px] sm:w-[60px] rounded-full'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero