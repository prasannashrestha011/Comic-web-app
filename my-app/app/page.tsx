'use client'

import HomePic from "./components/interface/HomePic";
import Navbar from "./components/navbar";
import TypingEffect from "./components/typewriter/TypeWriter";




export default function Home() {
  

  return (
    <div className=" ">

<Navbar/>

<TypingEffect/>
    
    <HomePic/>
    </div>
  );
}
