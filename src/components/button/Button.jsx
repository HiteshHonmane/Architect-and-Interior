import React from "react";
import buttonSvg from '../../assets/icons/button.svg'
// import "./Button.css";

function Button(props) {

  return (
    <div class="transition duration-700 ease hover:bg-black hover:text-white cursor-pointer w-52 h-12 font-satoshi font-bold flex justify-center items-center gap-3 rounded-full border border-[#585858] p-2 hover:translate-x-0">
      <div className=" uppercase" >
        {props.name}
      </div>   
      <div className=" w-[18px] bg-[#141414] rounded-full " >
      <img className="border rounded-full invert   " src={buttonSvg}  width={18} alt="" />
      </div>
    </div>
  );
}

export default Button;

<a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Button Text</span>
</a>