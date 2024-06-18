import { Textarea } from '@nextui-org/react'
import React from 'react'
import FileStructureModal from '../modal/FileStructure.Modal'

const AuthorPage = () => {
  return (
    <div>
    <div className='m-auto flex justify-center items-center flex-col w-fit px-10 py-5 rounded-xl' style={{backgroundColor:'#18181B'}}>
    <FileStructureModal/>
    <p>This website was programmed by <strong>Prasanna Shrestha</strong>.</p>
    <p>I primarily used  Next.js framework to build this website</p>
    <p className='flex flex-row justify-center items-center'>All comic resources were sourced from my GitHub repository.</p>
    <a 
    target="_blank"
    href='https://github.com/prasannashrestha011'><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" className='w-9 rounded-xl'/></a>
</div>

    </div>
  )
}

export default AuthorPage
