import React from 'react'
import sketch from '../../assets/images/sketch.svg'

function ft() {
  return (
    <div className="overflow-hidden w-[100vw]  h-[100vh] bg-[#141414] relative ">
        <img
          className=" absolute scale-150  w-full h-[80vh] invert object-cover object-bottom  "
          src={sketch}
          alt=""
        />
        </div>
  )
}

export default ft