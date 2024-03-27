import React from 'react'


function ServiceCard(props) {
  return (
    <div className='w-[37.5rem] h-28 bg-[#ECECEA] '>

        <div className='p-5'>
            <img width={37} src={props.ServiceLogo} alt="" />
            <div className=' uppercase font-satoshi font-medium text-base'> {props.serviceTitle}
           </div>
        </div>


    </div>
  )
}

export default ServiceCard