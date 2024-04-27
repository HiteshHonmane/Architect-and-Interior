import React from 'react'
import blogsvg from '../assets/icons/blog.svg'
import Button from '../components/button/Button'
import BlogCard from '../components/blog/BlogCard'
import { Link } from 'react-router-dom'

function BlogPage() {

  const blog1= {
    tag:'design inspirations',
    title: 'Transforming spaces with timeless design',
    writer: 'james miller',
    date:'january 18, 2024',
    imglink:'https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024',
    clicklink:''
  }
  const blog2= {
    tag:'design insight',
    title: 'the social impacct of architectural innovation',
    writer: 'patrick watson',
    date:'january 11, 2024',
    imglink:'https://framerusercontent.com/images/MDtFSJaF3MhabVjn223xx2IMk.jpg?scale-down-to=1024',
  }
  const blog3= {
    tag:'interior design insights',
    title: 'the impact of interior on wellbeing',
    writer: 'rayan milford',
    date:'december 5, 2023',
    imglink:'https://framerusercontent.com/images/v1ltoVHr1qjuj63noI3YsrEqSNg.jpg?scale-down-to=1024',
  }

  const font = {
    font: " font-satoshi ",
  };



  return (
    <div className="px-12  overflow-clip w-screen h-screen bg-[#F8F8F5] ">
    <div className="flex flex-col w-full h-[30vh] ">
      <div className={`" text-xs flex flex-row  ${font.font} "`}>
        <img width={15} src={blogsvg} alt="" />
        BLOGS & INSIGHTS
      </div>
      <div className={`" font-satoshi font-medium text-xl ${font.font} "`}>
      INSIGHTS, THOUGHTS, TRENDS & TIPS
      </div>
      <div className="flex relative px-12 py-6 justify-end">
        <p className={`" ${font.font} text-[18px]  "`}>
        Stay on the pulse of the latest architecture trends <br /> and thinking via our collection of insights.
        </p>
      </div>
      <div className="w-full h-[2px] bg-[#141414]"></div>
      <div className="w-full flex mt-5 justify-end  ">
        <div className="">
          <Button name={"Read Blogs"} />{" "}
        </div>
      </div>
    </div>
    <div className=' flex flex-row gap-3 cursor-pointer'>
          <BlogCard {...blog1}/> 
          <BlogCard {...blog2}/>
          <BlogCard {...blog3}/>
    </div>
    
    <div className=" flex gap-3"></div>
  </div>
 
  )
}


 


export default BlogPage