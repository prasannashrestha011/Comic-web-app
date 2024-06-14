'use client'
import React,{ReactNode, createContext,useContext} from 'react'
import Sidebar from '../Sidebar'
import DarkModeBtn from '../buttons/DarkModeBtn'
const SideBarContext=createContext(null)
const SideBarProvider:React.FC<{children:ReactNode}> = ({children}) => {

  return (
    <SideBarContext.Provider value={null}>
      <div className=' flex flex-row   '>
            <div className='flex-1'>
              <Sidebar/>
            </div>
            <div className=' flex flex-1  justify-end pr-6 '>
            <DarkModeBtn/>
            
            </div>
      </div>
      <div className='main-navbar-btn'>
      {children}
      </div>
    </SideBarContext.Provider>
  )
}

export  {SideBarContext,SideBarProvider}
