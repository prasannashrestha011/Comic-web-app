
import React, { useRef } from 'react'
interface ReadModeProp{
    name:string,
    imglist:string[],
    onClose:()=>void,
}
const ReadMode:React.FC<ReadModeProp> = ({name,imglist,onClose}) => {
  const modalRef=useRef(null)
  const toggleCloseReadMode=(e:React.MouseEvent<HTMLDivElement>)=>{
    if(e.target==modalRef.current){
      onClose()
    }
  }
  return (
    <div 
    ref={modalRef}
    onClick={toggleCloseReadMode}
    className='backdrop-blur-lg inset-0 fixed flex justify-center  bg-opacity-30 overflow-scroll'>
      <div className='  h-auto lg:w-4/12 sm:w-4/12 mx-10 overflow-y-scroll '>
          {/* comic images  */}
          <div>
          <ul>
            {imglist.map((img,idx)=>{
              return(
                <li key={idx}>
                  <div className=''>
                    <img src={img} className='w-full'/>
                  </div>
                </li>
              )
            })}
          </ul>
          </div>
      </div>
    </div>
  )
}

export default ReadMode
