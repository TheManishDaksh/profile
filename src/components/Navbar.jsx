import React from 'react'

function Navbar() {
  return (
    <div className='w-screen max-w-full pt-4 items-center rounded-full flex justify-center'>
        <div className='text-white flex justify-center gap-10 p-4  border-solid border-2 border-slate-700    rounded-full shadow shadow-white'> 
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Home</span>
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Projects</span>
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Education</span>
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Contact</span>
    </div>
    </div>
  )
}

export default Navbar