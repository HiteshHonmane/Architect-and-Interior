import React, { useEffect } from 'react'
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);
import midlogo from "/pilors black.png"

function loading() {

  useEffect(()=>{
  
    reveal()
    reveal2()

  },[])
  const reveal2 =()=>{
    const t2 = gsap.timeline({
      onComplete:()=>{
        console.log("t2 completed")
      }
    })
    t2.to('#midlogo' ,{
        right:'45%',
        ease: Expo.easeOut,
        duration: 1.2,
        delay: 0.7,
        stagger: 0,
    })
    .to('#midlogo', {
      bottom:'40%',
      ease: Expo.easeOut,
      duration: 1.2,
      delay: 0,
    })
    .to('#midlogo', {
      display:'none'
    })

  }

  const reveal = () =>{

    const t1 = gsap.timeline({
      onComplete: ()=>{
        console.log("completed");
      },
    })
    t1.to("#black",  {
      width: '0%',
      ease : Expo.easeOut,
      duration:1.2,
      delay:0.7,
      stagger:0
    })
    
    .to("#white",{
      height:"0%",
      ease:Expo.easeOut,
      duration:1.2,
      delay:0,
    })
    
    

  }

  return (
    <div  className=' w-[100vw] h-[100vh] absolute overflow-hidden   '> 
    <div id='black' className=' bg-[#2b2d2f] w-[100%] h-full absolute z-10'></div>
    <div id='white' className=' bg-[#d0cfcf] h-[100%] w-full absolute  '></div>
    <div className=' absolute  top-[40%] left-[45%] transform-[translate(-50%, -50%)] z-50 w-full h-full'>
    <img id='midlogo' className=' relative '  width={200}  src={midlogo} alt="" />
    </div>
    </div>
  )
}

export default loading