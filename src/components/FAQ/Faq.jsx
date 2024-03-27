import React from "react";
import plusSvg from '../../assets/icons/plus.svg'
function Faq() {
  return (
    <div className=' w-full  mt-12  border-b   '>
       <div className='flex px-11 h-16 gap-20 item-center align-middle hover:bg-slate-300  '  >
        <img src={plusSvg} width={14} alt="" />
        <div className=' flex font-satoshi font-medium text-base items-center text-[#20201F]' > WHAT ARCHITECTURAL DESIGN SERVICES DO YOU OFFER? </div>
       </div>
    </div>
  )
}

export default Faq