
import React from 'react'
import SwiperComp from '../components/Swiper/SwiperComp'
import TermsAndPolicyModal from '../modal/Terms&policy'
import FileStructureModal from '../modal/FileStructure.Modal'
import AuthorPage from '../Author/page'

const AboutPage = () => {
  return (
    <div>
     
   
      <nav className='flex flex-row justify-center items-center gap-1'>
      <TermsAndPolicyModal/>
     
      </nav>
   
    </div>
  )
}

export default AboutPage
