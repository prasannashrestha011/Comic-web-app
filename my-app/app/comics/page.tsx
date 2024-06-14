
import React from 'react'

import ComicList from '../components/DataList/List'

const Comics = () => {

  return (
    <div className='pl-16 h-full sm:flex sm:flex-col justify-center items-center lg:flex '>
  {/* Content */}
       <div className='flex justify-center h-16 text-xl font-semibold '>List of Comics</div>
        <ComicList/>     
    </div>
  )
}

export default Comics
