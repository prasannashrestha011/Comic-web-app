'use client'
import { MarvelComicList } from '@/app/source/options'
import React, { useState } from 'react'
import ReadMode from '../readmode/ReadMode'

interface ComicProp{
  name:string,
  imglist:string[],
}
const ComicList = () => {
  const [show_comic_panel,setShowComicPanel]=useState<boolean>(false)
  const [isComic,setIsComic]=useState<ComicProp | null>(null)
  const toggleComicPanel=(name:string,imglist:string[])=>{
    setShowComicPanel(!show_comic_panel)
    setIsComic({
      name:name,
      imglist:imglist,
    })
  }
  return (
    <div className=''>
       <ul className='  w-fit   lg:grid grid-cols-3 gap-4 sm:flex sm:flex-col sm:justify-center '>
     {MarvelComicList.map((card,idx)=>{
        return(
            <li key={idx}>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={card.thumbnail} alt="image" className="rounded-xl lg:w-80 sm:w-3/4 md:w-80" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{card.name}</h2>
                        <p className='text-red-400'>{card.publisheddate}</p>
                        <p>{card.intro}</p>
                       
                        <div className="card-actions">
                        <button className="btn btn-primary " onClick={()=>card.imglist?toggleComicPanel(card.name,card.imglist):console.log('no image list found"')}>Read Now</button>
                        </div>
                    </div>
</div>
             
            </li>
        )
      })}
     </ul>
     {show_comic_panel&&isComic?<ReadMode name={isComic.name} imglist={isComic.imglist} onClose={()=>setShowComicPanel(!show_comic_panel)}/>:""}
    </div>
  )
}

export default ComicList
