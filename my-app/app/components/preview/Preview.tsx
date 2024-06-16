'use client'
import React, { ChangeEvent, useRef, useState } from 'react'

interface PreviewProp{
    name:string,
    img:string,
    author:string,
    artist:string,
    context:string,
    publisedDate:string,
    showPreview:boolean,
    setShowPreview:(showPreview:boolean)=>void
}
const Preview: React.FC<PreviewProp> = ({name,img,author,artist,context,publisedDate,showPreview,setShowPreview}) => {
    const modelRef=useRef(null)
    const [loading,setLoading]=useState<boolean>(true)
    const handleClose=(e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.target==modelRef.current){
            setShowPreview(!showPreview)
        }
    }
    const handleImageLoading=()=>{
      setLoading(false)
    }
    return (
      <div onClick={handleClose} ref={modelRef} className='fixed top-0 left-0 right-0 bottom-0  backdrop-blur-md  bg-opacity-30 flex justify-center items-center'>
            <div className=' border border-black  ' style={{width:'95%',height:'auto'}}> 
            <div className='bg-red-600 flex items-center justify-center h-14 lg:text-xl sm:text-xs'>{name}</div>
            <div className='flex flex-col justify-center items-center text-xl '>
            
             <span className=' w-full flex justify-center'>
              {loading?
            <span className="loading loading-bars loading-lg"></span>:""  
            }
              <img 
              onLoad={handleImageLoading}
              src={img} className={`w-56 ${loading?'hidden':'block'}`}/>
              </span>
           
            </div>
            <div className='bg-white text-slate-950' style={{fontSize:'18px'}}>  
              <span className='lg:text-xl sm:text-xs'>{context}</span>
              </div>
              
            <div>Written by {author}</div>
            </div>
      </div>
    );
  }

export default Preview
