'use client'
import { ListOfCharactersCard } from '@/app/source/options'
import React, { useState } from 'react'
import PreViewCharacters from '../preview/PreViewCharacters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortAlphaAsc, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons'

interface CharacterProps{
    name:string,
    details:string,
    img:string,
    type:string,
  }
const CharacterList = () => {
    const [show_character_card,setShowCharacterCard]=useState<boolean>(false)
    const [characterPreview,setCharacterPreview]=useState<CharacterProps | null>(null)
    const [issorted,setIsSorted]=useState<boolean>(false)
    const [sortedcard,setSortedCard]=useState<CharacterProps[]>([])
  
    const toggleCharacterCard=(name:string,details:string,img:string,type:string)=>{
      setCharacterPreview({name:name,
        details:details,
        img:img,
        type:type})
      setShowCharacterCard(!show_character_card)
    }
    const sortCharacterByAlphabet=()=>{
        setIsSorted(!issorted)
     setSortedCard([...ListOfCharactersCard].sort((a,b)=>a.name.localeCompare(b.name)))
    }
  return (
    <div>
       <ul className='flex flex-col gap-5'>
        <p onClick={sortCharacterByAlphabet}>
        <button className='btn btn-circle'>Sort</button>
        </p>
        {(issorted?sortedcard:ListOfCharactersCard).map((card,idx)=>
        (
        
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
       
      ))}
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

export default CharacterList
