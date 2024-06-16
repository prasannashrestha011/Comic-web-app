

import React from 'react'
import Link from 'next/link'


const Navbar:React.FC = () => {

  return (
    <div className='navbar  bg-base-100   shadow-xl rounded-xl main-navbar-btns sm:w-full' >
  
       
        <div className={`  flex-1 gap-5 w-52  justify-center sm:w-fit `}>
        
            
            <button className='btn btn-ghost text-xl '><a href="/comics">Comics</a></button>
            <a href='/characters'><button className='btn btn-ghost text-xl'>Characters</button></a>
            <Link href="/about"><button className='btn btn-ghost text-xl '>About</button></Link>
        </div>
        <div className='flex-none'>
   
        </div>
    </div>
  )
}

export default Navbar
