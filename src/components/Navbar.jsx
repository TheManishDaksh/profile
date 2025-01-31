import React from 'react'
import {Link} from "react-scroll"

function Navbar() {
  return (
    <div className='w-screen max-w-full pt-4 items-center rounded-full flex justify-center sticky top-0 z-50 '>
        <div className='text-white flex justify-center gap-10 p-4  border-solid border-2 border-slate-700    rounded-full shadow shadow-white transition-transform hover:shadow-2xl'> 
       <Link to='home' smooth={true} duration={500}> 
       <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Home</span>
        </Link>
        <Link to='project' smooth={true} duration={500}>
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Projects</span>
        </Link>
        <Link to='Education' smooth={true} duration={500}>
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Education</span>
        </Link>
        <Link to='Contact' smooth={true} duration={500}>
        <span className='cursor-pointer transition-colors duration-300 hover:text-sky-300'>Contact</span>
        </Link>
    </div>
    </div>
  )
}

export default Navbar