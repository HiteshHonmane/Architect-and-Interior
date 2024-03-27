import React from 'react'
import FaqSvg from '../assets/icons/faq.svg'
import Button from '../components/button/Button'
import Faq from '../components/FAQ/Faq'
import { useEffect , useRef } from 'react'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FAQPage() {
  
  const leftSideRef = useRef(null);
  const container = useRef(null);
 
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom +=50% ',
      pin: leftSideRef.current,
      markers:true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div ref={container} className="px-12  flex overflow-clip w-screen h-[200vh] bg-[#F8F8F5] pt-[10vh] ">

    <div ref={leftSideRef} className="flex  flex-col w-[50%] h-[20vh] relative  ">
      <div className=" text-xs flex flex-row font-satoshi w-full  ">
        <img width={15} src={FaqSvg} alt="" />
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </div>
      <div className=" font-satoshi font-medium text-xl ">
      EVERYTHING YOU MAY NEED TO KNOW
      </div>
      <div className="flex relative  py-6 ">
        <p className=" font-satoshi text-[18px]  ">
        All insights into our expertise provided in easily <br /> digestible nuggets. No question too big or small - ask away!
        </p>
      </div>
      <div className="w-full flex flex-col mt-5 justify-end  ">
        <div className="">
          <Button name={"MORE QUESTIONS?"} />{" "}
        </div>
      </div>
    </div>

    <div id='FAQ-Right ' className='Side h-full w-[56%] px-3  border'>
      <Faq/>



    </div>
   
    
  </div>
  )
}

export default FAQPage