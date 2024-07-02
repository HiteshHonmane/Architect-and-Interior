import React from 'react'
import blogsvg from '../assets/icons/blog.svg'
import Button from '../components/button/Button'
import BlogCard from '../components/blog/BlogCard'
import PageHeader from '../components/pageHeader/PageHeader';


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

  const blogProps = {
    title: 'BLOGS & INSIGHTS',
    logo: blogsvg,
    Headline: 'INSIGHTS, THOUGHTS, TRENDS & TIPS',
    Description: <> <p> Stay on the pulse of the latest architecture trends <br /> and thinking via our collection of insights.</p></>,
    buttonName: 'Read Blogs',
  };

  return (
    <div className="pt-12 h-[280vh]  sm:px-12 sm:pt-12 relative overflow-clip sm:w-screen sm:h-screen bg-[#F8F8F5]">

      <PageHeader {...blogProps} />

      <div className=" px-5 sm:px-0 flex  flex-col sm:flex-row gap-3 cursor-pointer">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
}


 


export default BlogPage