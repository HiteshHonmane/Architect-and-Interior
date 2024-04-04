import React from 'react'


function ServiceCard(props) {
  return (
    <div className='w-[37.5rem] h-28 bg-[#ECECEA] transition-all duration-700 ease-in-out transform hover:invert hover:scale-95 '> 
  <div className='p-5 absolute '> 
    <img className=' transition-all duration-700 ease-in-out transform hover:scale-110' width={37} src={props.ServiceLogo} alt="" /> 
    <div className=' mt-3 uppercase font-satoshi font-medium text-base'> 
      {props.serviceTitle} 
    </div> 
  </div> 
</div>

  )
}

export default ServiceCard