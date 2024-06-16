import React, { useRef } from 'react'
import { Card,CardHeader,CardBody, } from '@nextui-org/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
interface CharacterProps{
    name:string,
    details:string,
    img:string,
    type:string,
    showPreview:()=>void
}
const PreViewCharacters:React.FC<CharacterProps> = ({name,details,img,type,showPreview}) => {
  const modalRef=useRef(null)
  const handleModalTouch=(e:React.MouseEvent<HTMLDivElement>)=>{
    if(e.target==modalRef.current){
      showPreview()
    }
  }
  return (
   
    <div 
    ref={modalRef}
    onClick={handleModalTouch}
    className='  backdrop-blur-md bg-opacity-30 inset-0 fixed flex justify-center items-center'>
       <div className=' flex flex-col justify-center items-center rounded-xl overflow-hidden' style={{width:'75%', height:'auto'}}>
        <div className='text-xl font-semibold bg-red-800 w-full flex justify-center items-center px-1 '> 
          <div className='flex-1 flex justify-center pl-8'>{name}</div>
          <div className='btn btn-neutral btn-circle' onClick={()=>showPreview()}><FontAwesomeIcon icon={faClose}/></div>
          </div>
        <div className='bg-red-700'>
          <span className=' flex justify-center flex-col items-center'>
         {type=="marvel"? <div className='  w-full flex justify-end ' >
          <svg xmlns="http://www.w3.org/2000/svg" width="90" height="" viewBox="0 0 500 200" id="marvel">
              <path fill="#f0141e" d="M0 0h500v200H0z"></path>
              <path fill="#fff" d="M423.12 46.619V15.991h-85.706l-14.11 102.282-13.94-102.282h-30.908l3.454 27.312c-3.563-7-16.211-27.312-44.061-27.312-.185-.012-30.945 0-30.945 0l-.128 149.084-22.523-149.084-40.484-.012-23.304 154.467.013-154.455H81.726l-13.965 86.768-13.604-86.768H15.399v167.932h30.523v-80.944l13.886 80.944h16.224l13.69-80.944v80.944h58.838l3.558-25.83h23.688l3.558 25.83 57.771.037h.042v-.037H237.249v-54.504l7.074-1.024 14.661 55.565h29.883l-.012-.037H288.94l-19.238-65.11c9.741-7.179 20.752-25.379 17.822-42.798v-.006c.036.226 18.164 108.026 18.164 108.026l35.534-.11 24.279-152.203v152.203h57.617v-30.199h-27.344v-38.507h27.344v-30.66h-27.344v-37.94h27.346zM155.713 131.47l8.387-71.802 8.69 71.802h-17.077zm88.708-33.155c-2.344 1.123-4.784 1.685-7.172 1.691v-54.01c.037 0 .093-.006.153-.006 2.38-.018 20.203.714 20.203 26.709 0 13.598-6.06 22.174-13.184 25.616zm240.186 55.383v30.188h-56.214V15.967h30.272v137.731h25.942z"></path>
            </svg>
          </div>:""}
           <img src={img} className='w-56 pb-2 rounded-lg'/>
        
         
            </span>
          <div className='px-4  bg-slate-100 text-slate-950'>
            
        
            {details}
          </div>
        </div>
       </div>
    </div>
  )
}

export default PreViewCharacters
