 'use client'
import React from 'react'



const Sidebar = () => {

  return (
    <div className="drawer drawer-start  w-fit z-10 ">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-circle">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>    
        </label>
    </div> 
    <div className="drawer-side ">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><a href='/' className='text-xl'>Home</a></li>
        <li><a href='/Author' className='text-xl'>Author</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar
