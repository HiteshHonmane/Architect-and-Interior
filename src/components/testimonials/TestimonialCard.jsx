import React from "react";
import locationsvg from "../../assets/icons/location.svg";
import locationsvg2 from '../../assets/icons/location2.svg'

function TestimonialCard(props) {
  return (
    <div className=" sm:w-[44.688rem] p-6 sm:h-[32.875rem] bg-white relative">
      <div className=" flex  gap-3  ">
        <img
          className=" object-cover   w-12 h-12 rounded-[100%] "
          src="https://framerusercontent.com/images/xR1YTZcMU0J4Lo6OqdKo8QYQYnQ.jpg?scale-down-to=1024"
          alt=""
        />
        <div className=" font-satoshi font-medium text-base uppercase">
          The team exceeded our expectations at every turn….
        </div>
      </div>

      <div className="w-full h-[50%]  flex flex-col items-end pt-32 font-satoshi ">
        <p className="  font-normal text-base ">
          "The team exceeded our expectations at every turn. They skillfully
          translated our vision into an awe-inspiring home our family will
          cherish for decades."
        </p>
        <div className=" text-xs uppercase py-4 text-[#BCBCBC]  ">
          -JOHNY, Homeowner
        </div>
      </div>

     {/* Dash */}
      <div className='w-full mt-28 h-[1px] bg-[#E7E7E7]'></div>

      <div className="relative mt-2">
        <img
          className="w-[710px] h-20 object-cover filter brightness-75 "
          src="https://framerusercontent.com/images/XIWzGTbchPF3j20s47w5ViA4s3A.jpg?scale-down-to=512"
          alt=""
        />
        <div className="absolute p-2 inset-0 flex flex-col  justify-center ">
          <div className="text-white font-satoshi font-medium text-base">
            HILLSIDE OASIS RESIDENCE
          </div>
          <div className="flex items-center text-white">
            <img width={14} className="invert " src={locationsvg2} alt="" />
            <span className="uppercase font-satoshi  ml-2">Nagpur, Maharashtra</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
