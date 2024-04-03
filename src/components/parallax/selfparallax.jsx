import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ExpoScaleEase } from "gsap/EasePack";
import { Observer } from "gsap/Observer";

function selfparallax() {
    const animationRef = useRef(null); // Declare the ref outside the useGSAP hook
    const mainContainerRef = useRef(null);
    const animation2Ref = useRef(null);
    const pinRef = useRef(null)
  
  
    useGSAP(() => {
      gsap.registerPlugin(Observer);
      gsap.registerPlugin(ExpoScaleEase);
      gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin
  
      // Set The scroll triggers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current, // For setting scroll trigers Important
          start: "top top",
          end: "bottom 500px ",
          
          // scrub: true,
          markers: true,
          // toggleActions:"restart pause reverse pause",
        },
      });
     
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current, // For setting scroll trigers Important
          start: "center top",
          end: "bottom 500px ",
          // scrub: true,
          markers: true,
          // toggleActions:"restart none reverse pause",
        },
        
      });
      const tl3= gsap.timeline({
        scrollTrigger:{
          trigger: mainContainerRef.current, // For setting scroll trigers Important
          start: "bottom bottom",
          end: "bottom 500px ",
          // pin:animationRef.current,
          // scrub: true,
          markers: true,
          
        }
      })
  
      // Set The animation which is going to perform on the scroll triggers
      tl.from(animationRef.current, {
        // opacity: 0,
        autoAlpha: 0,
        // position:'absolute',
        y: 800,
        duration: 2,
        delay: 0,
        ease: "power2)",
        zIndex:5,
        stagger: {
          each: 0.02,
          from:"random",
                                                                                                       
        },
      });
  
      tl2.from( animation2Ref.current,{
        // autoAlpha: 0,
        y: 800,
        opacity:0,
        // position:'fixed',
        duration: 2,
        delay: 0,
        ease: "power2)",
        zIndex:5,
        stagger: {
          each: 0.02,
          from: "random",
          
        },
      })
      tl3.from(mainContainerRef.current,{
        delay:5,
        // position:'fixed',
        ease: "power2)",
        height:'100vh',
        zIndex:5,
        stagger: {
          each: 0.02,
          from: "random",
          
        },
        
      })
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=300vh", // Adjust this value based on the height of the pinned element
          pin: true,
          pinSpacing: false,
        },
      });
    
      // Add your animations to the pinTl timeline
     
  
    }, []);
  
    
  
    return (
      <>
       <div
        ref={pinRef} 
         className="w-[100vw] flex justify-center items-center h-[300vh] border bg-black relative overflow-x-hidden" > 
         {/* Pin this */}
       <div
          ref={mainContainerRef}
          id="container  "
          className="w-[100vw] flex justify-center items-center  h-[200vh] bg-black absolute top-0
           "
        >
          <img
            className=" absolute   object-cover w-full "
            ref={animationRef}
            src="https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?w=1380&t=st=1712079795~exp=1712080395~hmac=e87833ab33067c47a7c9c25564e531a9a5e80b0c4201ad12dfed82692f9dac63"
            alt=""
          />
          
          <img 
          ref={animation2Ref}
          className="  w-full  object-cover "
           src="https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1380&t=st=1712126282~exp=1712126882~hmac=84e24b2005eb54edc52a16281221542e1f9e901638ff23a9b36a04533c311f7c" alt="" />
        </div>
        
       </div>
       {/* <div className="h-[100vh] w-[100vw] relative ">
          he=ello
        </div> */}
      </>
    );
  }

export default selfparallax