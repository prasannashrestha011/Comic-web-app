'use client'
import React from "react"; 


import { Typewriter } from 'react-simple-typewriter';
const  TypingEffect:React.FC=()=> { 
return ( 
	<div> 
	
  <div className=" mt-10  flex justify-center lg:text-3xl text-3xl font-marvel font-semibold ">
        <Typewriter
          words={['Read Marvel Comics!']}
          loop={1}
          cursor
          cursorStyle=''
          typeSpeed={100}
          deleteSpeed={20}
          delaySpeed={1000}
        />
      </div>
	</div> 
); 
}
export default TypingEffect
