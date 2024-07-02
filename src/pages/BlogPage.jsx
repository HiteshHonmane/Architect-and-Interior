import React from 'react'
import blogsvg from '../assets/icons/blog.svg'
import Button from '../components/button/Button'
import BlogCard from '../components/blog/BlogCard'
import { Link } from 'react-router-dom'

function BlogPage() {
  const blogs = [
    {
      tag: 'design inspirations',
      title: 'Transforming spaces with timeless design',
      writer: 'james miller',
      date: 'january 18, 2024',
      imglink: 'https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024',
    },
    {
      tag: 'design insight',
      title: 'the social impact of architectural innovation',
      writer: 'patrick watson',
      date: 'january 11, 2024',
      imglink: 'https://framerusercontent.com/images/MDtFSJaF3MhabVjn223xx2IMk.jpg?scale-down-to=1024',
    },
    {
      tag: 'interior design insights',
      title: 'the impact of interior on wellbeing',
      writer: 'rayan milford',
      date: 'december 5, 2023',
      imglink: 'https://framerusercontent.com/images/v1ltoVHr1qjuj63noI3YsrEqSNg.jpg?scale-down-to=1024',
    },
  ];

  return (
    <div className="px-12 overflow-clip w-screen h-screen bg-[#F8F8F5]">
      <div className="flex flex-col w-full h-[30vh]">
        <div className={`text-xs flex flex-row font-satoshi gap-1`}>
          <img width={15} src={blogsvg} alt="" />
          BLOGS & INSIGHTS
        </div>
        <div className={`font-satoshi font-medium text-xl uppercase`}>
          INSIGHTS, THOUGHTS, TRENDS & TIPS
        </div>
        <div className="flex relative px-12 py-6 justify-end">
          <p className={`font-satoshi text-[18px]`}>
            Stay on the pulse of the latest architecture trends <br />
            and thinking via our collection of insights.
          </p>
        </div>
        <div className="w-full h-[2px] bg-[#141414]" />
        <div className="w-full flex mt-5 justify-end">
          <div>
            <Button name="Read Blogs" />{' '}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 cursor-pointer">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}


 


export default BlogPage