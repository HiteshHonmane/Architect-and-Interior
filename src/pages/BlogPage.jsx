
import React from 'react'
import blogsvg from '../assets/icons/blog.svg'
import Button from '../components/button/Button'

function BlogPage() {
  return (
    <div className="px-12  overflow-clip w-screen h-screen bg-[#F8F8F5] ">
    <div className="flex flex-col w-full h-[40vh] ">
      <div className=" text-xs flex flex-row font-satoshi">
        <img width={15} src={blogsvg} alt="" />
        BLOGS & INSIGHTS
      </div>
      <div className=" font-satoshi font-medium text-xl ">
      INSIGHTS, THOUGHTS, TRENDS & TIPS
      </div>
      <div className="flex relative px-12 py-6 justify-end">
        <p className=" font-satoshi text-[18px]  ">
          We make even the wildest architectural dreams into <br /> dramatic
          yet feasible finished products anyone <br />
          would be proud of.
        </p>
      </div>
      <div className="w-full h-[2px] bg-[#141414]"></div>
      <div className="w-full flex mt-5 justify-end  ">
        <div className="">
          {" "}
          <Button name={"Explore Services"} />{" "}
        </div>
        
      </div>
    </div>
    
    <div className=" flex gap-3"></div>
  </div>
 
  )
}


 


export default BlogPage