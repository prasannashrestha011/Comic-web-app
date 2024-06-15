'use client'
import React, { ChangeEvent, useRef } from 'react'

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
    const handleClose=(e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.target==modelRef.current){
            setShowPreview(!showPreview)
        }
    }
    return (
      <div onClick={handleClose} ref={modelRef} className='fixed top-0 left-0 right-0 bottom-0  backdrop-blur-md  bg-opacity-30 flex justify-center items-center'>
            <div className=' border border-black sm:w-96' style={{width:'65%',height:'auto'}}> 
            <div className='flex flex-col justify-center items-center text-xl '>
             <span>{name}</span>
             <span><img src={img} className='w-56'/></span>
           
            </div>
            <div className='' style={{fontSize:'18px'}}>  
              <span>{context}</span>
              </div>
            {author}
            </div>
      </div>
    );
  }

export default Preview
