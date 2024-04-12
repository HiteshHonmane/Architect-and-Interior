import React, { useState } from "react";
import ArchitectImg from "../../../public/bedroom.jpg";
import "./Service.css";
function ServiceCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="service-card"
      className="w-[37.5rem] bg-white h-28 bg- transition-all duration-700  ease-in-out bg-center  transform hover:scale-95 service-card relative hover:bg-black hover:text-white "
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
     <div className={`" ${isHovered? 'opacity-1' : 'opacity-0'} transition-all duration-700  ease-in-out  "`}>
     <img
        src={props.bgImg}
        className="w-[37.5rem] h-28 object-cover object-center absolute clip-polygon brightness-90  "
        alt=""
      />
     </div>

      <div className="p-5 absolute  ">
        <img
          className={`" ${isHovered ? 'invert' : ""} transition-all duration-700 ease-in-out transform hover:scale-110" `}
          width={37}
          src={props.ServiceLogo}
          alt=""
        />
        <div className=" mt-3 uppercase font-satoshi font-medium text-base">
          {props.serviceTitle}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
