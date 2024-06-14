import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const CloseIcon = () => {
  
  return (
    <div className=' flex justify-end'>
      <button 
      className='btn  btn-circle '
     >
        <FontAwesomeIcon icon={faClose} size='1x'/>
        </button>
    </div>
  )
}

export default CloseIcon
