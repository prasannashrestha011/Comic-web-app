'use client'
import React, { useEffect, useState } from 'react'
import { ComicsContent } from '../../source/options'
import Preview from '../preview/Preview'
interface PreviewProp{
  name:string,
  img:string,
  author:string,
  artist:string,
  context:string,
  publisedDate:string,
}
const ComicList:React.FC = () => {
  const [show_preview_panel,setShowPreviewPanel]=useState<boolean>(false)
  const [previewdata,setPreviewData]=useState<PreviewProp | null>(null)
  const togglePreview=(name:string,img:string,author:string,artist:string,context:string,publisedDate:string)=>{
    console.log(name,img)
    setShowPreviewPanel(!show_preview_panel)
    setPreviewData({name:name,
      img:img,
      author:author,
      artist:artist,
      context:context,
      publisedDate:publisedDate})
  }
  useEffect(()=>{
    if(previewdata){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  },[previewdata])
  return (
    <div className='  flex flex-col justify-center items-center m-auto ' >
      <ul className='lg:w-full lg:grid grid-cols-3 gap-4 sm:flex flex-col   '>
         
         {ComicsContent.map((data,idx)=>{
             
             return(
                 <li key={idx}>
                  <div className={` card lg:w-96 md:w-80 sm:80  bg-base-100 shadow-xl card-theme mb-3 `} onClick={()=>togglePreview(data.name,data.img,data.author,data.artist,data.context,data.publishedDate)} >
                     <div className="card-body ">
                    <div className=''>
                    <p className="card-title w-full  flex justify-center items-center">{data.name}</p>
                    </div>
                      
                   </div>
                       <figure>
                        <div className='w-64 overflow-hidden '>
                        <img src={data.img} alt="Shoes" className='lg:w-64 sm:w-2 md:w-10' />
                        </div>
                         </figure>
                 </div>
              {show_preview_panel&&previewdata?
              <Preview  
              name={previewdata.name} 
              img={previewdata.img} 
               author={previewdata.author}
               artist={previewdata.artist}
               context={previewdata.context}
               publisedDate={previewdata.publisedDate}
              showPreview={show_preview_panel} 
              setShowPreview={setShowPreviewPanel}/>:""}
                 </li>
             )
         })}
     </ul>

    </div>
  )
}

export default ComicList