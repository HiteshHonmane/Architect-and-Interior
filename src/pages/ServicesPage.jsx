import React, { useState, useEffect } from "react";
import ServicesSvg from "../assets/icons/services.svg";
import Button from "../components/button/Button";
import ServiceCard from "../components/services/ServiceCard";
import architectSvg from "../assets/icons/services Icon/architect.svg";
import $ from 'jquery';

import './ServicePage.css'

function ServicesPage() {


  const [isHovered, setIsHovered] = useState(false);

  const service1 = {
    serviceTitle: "Architectural Design",
    ServiceLogo: "src/assets/icons/services Icon/architect.svg",
    bgImg:'https://t3.ftcdn.net/jpg/03/02/54/52/240_F_302545270_prsW0rH2fevehf3Oae7XloZdIwLd4gGj.jpg',
  };
  const service2 = {
    serviceTitle: "Interior Design",
    ServiceLogo: "src/assets/icons/services Icon/interior.svg",
    bgImg:'https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2021/10/luxury-interior-designers-in-Delhi-1.jpg',
  };
  const service3 = {
    serviceTitle: " Landscaping Design",
    ServiceLogo: "src/assets/icons/services Icon/landscaping.svg",
    bgImg:'https://www.home-designing.com/wp-content/uploads/2022/07/garden-waterfall.jpg',
  };
  const service4 = {
    serviceTitle: "Building Renovation",
    ServiceLogo: "src/assets/icons/services Icon/building Renovation.svg",
    bgImg:'https://www.dbsg.com/wp-content/uploads/2020/05/Renovate-or-build.jpg',

  };
  const service5 = {
    serviceTitle: "3d Visualization",
    ServiceLogo: "src/assets/icons/services Icon/3D.svg",
    bgImg:'https://www.ronenbekerman.com/wp-content/uploads/2018/11/commercial-interior-3d-visualization-breathtaking-lobby-presentation.jpg',
  };
  const service6 = {
    serviceTitle: "Planning & Strategies",
    ServiceLogo: "src/assets/icons/services Icon/architect.svg",
    bgImg:'https://5.imimg.com/data5/SELLER/Default/2023/1/LP/AB/VB/41936213/architectural-services-500x500.jpg'
  };
  const service7 = {
    serviceTitle: "commercial spaces",
    ServiceLogo: "src/assets/icons/services Icon/architect.svg",
    bgImg:'https://foyr.com/learn/wp-content/uploads/2019/03/wunderman-fitout-slider8.jpg'
  };
  const service8 = {
    serviceTitle: "Functional Spaces",
    ServiceLogo: "src/assets/icons/services Icon/architect.svg",
    bgImg:'https://www.arch2o.com/wp-content/uploads/2022/11/Arch2O-multifunctional-spaces.jpg'
  };
  const service9 = {
    serviceTitle: "Architectural Design",
    ServiceLogo: "src/assets/icons/services Icon/architect.svg",
  };

  return (
    

     

      <div className="px-12 pt-12 relative  overflow-clip w-screen h-screen bg-[#F8F8F5] ">
      
    <div className="flex flex-col w-full h-[40vh] ">
      <div className=" text-xs flex flex-row font-satoshi">
        <img width={15} src={ServicesSvg} alt="" />
        SERVICES
      </div>
      <div className=" font-satoshi font-medium text-xl ">
        DREAM. DESIGN. DEVELOP. <br />
        WE MAKE EVEN BOLD DREAMS INTO FINISHED PRODUCTS.
      </div>
      <div className="flex relative px-12 py-6 justify-end">
        <p className=" font-satoshi text-[18px]  ">
          We make even the wildest architectural dreams into <br /> dramatic
          yet feasible finished products anyone <br />
          would be proud of.
        </p>
      </div>
      <div className="w-full h-[2px] bg-[#141414]"></div>
      <div className="w-full flex mt-5 justify-end  ">
        <div className="">
          {" "}
          <Button name={"Explore Services"} />{" "}
        </div>
      </div>
    </div>
    <div className=" flex flex-wrap  gap-1 ">
     
      <ServiceCard {...service1} />
      
      <ServiceCard {...service2} />
      <ServiceCard {...service3} />
      <ServiceCard {...service4} />
      <ServiceCard {...service5} />
      <ServiceCard {...service6} />
      <ServiceCard {...service7} />
      <ServiceCard {...service8} />
      <ServiceCard {...service9} />
    </div>
    <div className=" flex gap-3"></div>
  </div>

   
    
  );
}

export default ServicesPage;
