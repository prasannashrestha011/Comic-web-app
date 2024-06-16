import React from 'react'
import { ListOfCharactersCard } from '../source/options'

const ListOfCharacters = () => {
  return (
    <div>
      <div className='m-auto  flex  text-2xl justify-center'>List of Characters</div>
        <ul className='flex flex-col gap-5'>
        {ListOfCharactersCard.map((card,idx)=>{
        return(
            <li key={idx}>
                <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={card.img} className="rounded-lg lg:w-52 sm:w-full" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title w-44">{card.name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
            </li>
        )
      })}
        </ul>
    </div>
  )
}

export default ListOfCharacters
