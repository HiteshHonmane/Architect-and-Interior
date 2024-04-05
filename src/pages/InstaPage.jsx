import React from 'react'
import InstaCard from '../components/Instagram/InstaCard'
import Button from '../components/button/Button'
import InstaSVG from '../assets/icons/insta.svg'

function InstaPage() {
  return (
    <div className="px-12  overflow-clip w-screen h-screen bg-[#F8F8F5] pt-6 ">
    <div className="flex flex-col w-full h-[30vh] ">
      <div className=" text-xs flex flex-row font-satoshi gap-1">
        <img width={15} src={InstaSVG} alt="" />
        SOCIALS
      </div>
      <div className=" font-satoshi font-medium text-xl uppercase ">
      EXPERINCE THE INTERIOR AND architecture
      </div>
      <div className="flex relative px-12 py-6 justify-end">
        <p className=" font-satoshi text-[18px]  ">
        Stay on the pulse of the latest architecture trends <br /> and thinking via our collection of insights.
        </p>
      </div>
      <div className="w-full h-[2px] bg-[#141414]"></div>
      <div className="w-full flex mt-5 justify-end  ">
        <div className="">
          <Button name={"FOLLOW US"} />{" "}
        </div>
      </div>
    </div>
    <div className=' flex flex-row gap-3'>
         <InstaCard/>
    </div>
    
    <div className=" flex gap-3"></div>
  </div>
 
  )
}

export default InstaPage