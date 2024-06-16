import React from 'react'

const HomePic = () => {
  return (
    <div className='  m-auto lg:w-5/12 sm:w-96 flex flex-col gap-2 ' >
      <img
      className='lg:w-full sm:w-96 m-auto rounded-xl'
    
      src='https://images7.alphacoders.com/387/387539.jpg'/>
      <a href='/comics'><button className='btn btn-primary w-28'> Get started</button></a>
    </div>
  )
}

export default HomePic
