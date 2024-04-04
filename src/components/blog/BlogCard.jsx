import React, { useState } from 'react';
import DateSvg from '../../assets/icons/date.svg'
import WritingSvg from '../../assets/icons/writing.svg'
import "./BlogCard.css"

function blog(props) {
  const [isHovered, setIsHovered] = useState(false)


  return (
    <div className={`' sm:w-[594px] sm:h-[543px]  transition duration-500 ease-in-out flex flex-col     ${isHovered ? '' : 'translate-y-5'} '`}  
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >

    

      <div className=' w-full h-[435px] flex flex-col object-contain overflow-hidden relative '>
        <img 
        // className='w-full h-[435px]  '
        className={`w-full h-[435px] transition duration-300  ease-in-out ${isHovered? 'blur-sm' : ''} `}
        src={props.imglink} alt="" /> 
       <div className='w-full h-full flex  justify-center items-center absolute '>
       <div 
        className={`transition duration-500 ease-in-out  h-full w-[50%] overflow-x-hidden absolute  flex justify-center items-center  flex-row   ${isHovered ? 'opacity-100' : 'opacity-0'} `}
      >
        <span className=" relative w-full right-full whitespace-nowrap animate-marquee justify-center items-center font-satoshi text-white text-lg uppercase ">
          Read Details &nbsp; Read Details &nbsp; Read Details &nbsp; Read Details
        </span>
       
      </div>
      
       </div>
      </div>
      
      <div className=' flex flex-wrap w-full mt-8   '>
      <div className=' font-satoshi mx-3  py-1 px-2 border rounded-lg font-medium text-xs  uppercase  '>
        {props.tag}
      </div>

      <div className=' font-satoshi font-medium text-  w-full text-[20px] px-3 uppercase '>
        {props.title}
      </div>

      <div className=' flex gap-1 flex-row justify-between items-center w-full p-3'>
        <img width={18} src={WritingSvg} alt="" />
        <span className='  w-[30%]  text-xs text-[#A6A6A4] uppercase '>
          {props.writer}
        </span>
        <div className='bg-slate-400 h-[1px] w-full  '>

        </div>

        <div className='w-[48%] flex justify-center gap-1 '>
          <img width={18} src={DateSvg} alt="" />
          <span className=' font-satoshi text-xs uppercase   text-[#A6A6A4]'>
            {props.date}
          </span>
        </div>

      </div>

      </div>
    </div>
  )
}

export default blog