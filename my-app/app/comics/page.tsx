
import React from 'react'

import ComicList from '../components/DataList/List'

const Comics = () => {

  return (
    <div className='w-auto h-full sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex '>
  {/* Content */}
       <div className='flex justify-center h-16 text-xl font-semibold '>List of Comics</div>
        <ComicList/>     
    </div>
  )
}

export default Comics
