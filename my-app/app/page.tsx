'use client'


import SwiperComp from "./components/Swiper/SwiperComp";
import HomePic from "./components/interface/HomePic";
import Navbar from "./components/navbar";
import TypingEffect from "./components/typewriter/TypeWriter";





export default function Home() {
  

  return (
    <div className=" ">

<Navbar/>
<SwiperComp/>
<TypingEffect/>
    
    <HomePic/>
  
    </div>
  );
}
