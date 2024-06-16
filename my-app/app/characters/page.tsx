'use client'
import React, { useState } from 'react'
import { ListOfCharactersCard } from '../source/options'
import PreViewCharacters from '../components/preview/PreViewCharacters'
interface CharacterProps{
  name:string,
  details:string,
  img:string,
  type:string,
}
const ListOfCharacters = () => {
  const [show_character_card,setShowCharacterCard]=useState<boolean>(false)
  const [characterPreview,setCharacterPreview]=useState<CharacterProps | null>(null)
 

  const toggleCharacterCard=(name:string,details:string,img:string,type:string)=>{
    setCharacterPreview({name:name,
      details:details,
      img:img,
      type:type})
    setShowCharacterCard(!show_character_card)
  }
  
  return (
    <div>
      <div className='m-auto  flex  text-2xl justify-center'>List of Characters</div>
        <ul className='flex flex-col gap-5'>
        {ListOfCharactersCard.map((card,idx)=>{
        return(
            <li key={idx}>
                <div className="card card-side bg-base-100 shadow-xl">
                <figure>
               
                    <img src={card.img} 
                  
                    className={`rounded-lg lg:w-52 sm:w-full  `}
                    />
                   
                    </figure>
                <div className="card-body">
                    <h2 className="card-title w-44  lg:text-2xl">{card.name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" 
                    onClick={()=>toggleCharacterCard(card.name,card.details,card.img,card.type)}>View Details</button>
                    </div>
                </div>
                </div>
            </li>
        )
      })}
      {show_character_card&&characterPreview?
      <PreViewCharacters 
      name={characterPreview.name} 
      details={characterPreview.details}
      img={characterPreview.img}
      type={characterPreview.type}
      showPreview={()=>setShowCharacterCard(!show_character_card)}
      />:""}
        </ul>
    </div>
  )
}

export default ListOfCharacters
