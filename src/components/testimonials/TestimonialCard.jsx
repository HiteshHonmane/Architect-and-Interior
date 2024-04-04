import React, { useState } from "react";
import locationsvg from "../../assets/icons/location.svg";
import locationsvg2 from "../../assets/icons/location2.svg";

function TestimonialCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" sm:w-[44.688rem] p-6 sm:h-[32.875rem] bg-white relative ">
      <div className=" flex  gap-3  ">
        <img
          className=" object-cover   w-12 h-12 rounded-[100%] "
          src={props.clientImg}
          alt=""
        />
        <div className=" font-satoshi font-medium text-base uppercase">
          The team exceeded our expectations at every turn….
        </div>
      </div>

      <div className="w-full h-[50%]  flex flex-col items-end pt-32 font-satoshi ">
        <p className="  font-normal text-base ">{props.titel}</p>
        <div className=" text-xs uppercase py-4 text-[#BCBCBC]  ">
          {props.name}
        </div>
      </div>

      {/* Dash */}
      <div className="w-full mt-28 h-[1px] bg-[#E7E7E7]"></div>

      <div
        className="absolute mt-2 
      "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="w-[670px] h-20 object-cover  brightness-75  "
          src={props.workImg}
          alt=""
        />
        <img
          className={` w-full   absolute bottom-0 object-cover transition duration-500 ease-in-out  ${
            isHovered ? "opacity-1  " : " opacity-0"
          }`}
          src={props.workImg}
          alt=""
        />

        <div className="absolute p-2 inset-0 flex flex-col  justify-center ">
          <div className="text-white font-satoshi font-medium text-base">
            HILLSIDE OASIS RESIDENCE
          </div>
          <div className="flex items-center text-white">
            <img width={14} className="invert " src={locationsvg2} alt="" />
            <span className="uppercase font-satoshi  ml-2">
              {props.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
