import React from "react";
import ServiceCard from "../components/services/ServiceCard";
import architectSvg from "../assets/icons/services Icon/architect.svg";
import "./ServicePage.css";
import PageHeader from "../components/pageHeader/PageHeader";


const serviceProps = {
  title:'SERVICES',
    logo:'assets/icons/services.svg',
    Headline:<> <p> DREAM. DESIGN. DEVELOP. <br />WE MAKE EVEN BOLD DREAMS INTO FINISHED PRODUCTS.</p></>,
    Description:<React.Fragment><p>We make even the wildest architectural dreams into<br/>dramatic yet feasible finished products anyone<br/>would be proud of.</p></React.Fragment>,
    ServicesSvg:'/public/assets/icons/services.svg',
    buttonName:'Explore Services',
};
function ServicesPage() {
  const services = [
    {
      serviceTitle: "Architectural Design",
      ServiceLogo: architectSvg,
      bgImg:
        "https://t3.ftcdn.net/jpg/03/02/54/52/240_F_302545270_prsW0rH2fevehf3Oae7XloZdIwLd4gGj.jpg",
    },
    {
      serviceTitle: "Interior Design",
      ServiceLogo: "../assets/icons/services Icon/interior.svg",
      bgImg:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/329145984/original/0b952be215c6d391081dca58e3960c0b47f5bfbb/make-interior-design-for-livingroom-kitchen-office-and-bedroom.jpg",
    },
    {
      serviceTitle: "Landscaping Design",
      ServiceLogo: "../assets/icons/services Icon/landscaping.svg",
      bgImg:
        "https://www.home-designing.com/wp-content/uploads/2022/07/garden-waterfall.jpg",
    },
    {
      serviceTitle: "Building Renovation",
      ServiceLogo: "../assets/icons/services Icon/building Renovation.svg",
      bgImg:
        "https://www.dbsg.com/wp-content/uploads/2020/05/Renovate-or-build.jpg",
    },
    {
      serviceTitle: "3D Visualization",
      ServiceLogo: "../assets/icons/services Icon/3D.svg",
      bgImg:
        "https://www.ronenbekerman.com/wp-content/uploads/2018/11/commercial-interior-3d-visualization-breathtaking-lobby-presentation.jpg",
    },
    {
      serviceTitle: "Planning & Strategies",
      ServiceLogo: architectSvg,
      bgImg:
        "https://5.imimg.com/data5/SELLER/Default/2023/1/LP/AB/VB/41936213/architectural-services-500x500.jpg",
    },
    {
      serviceTitle: "Commercial Spaces",
      ServiceLogo: architectSvg,
      bgImg:
        "https://foyr.com/learn/wp-content/uploads/2019/03/wunderman-fitout-slider8.jpg",
    },
    {
      serviceTitle: "Functional Spaces",
      ServiceLogo: architectSvg,
      bgImg:
        "https://www.arch2o.com/wp-content/uploads/2022/11/Arch2O-multifunctional-spaces.jpg",
    },
    {
      serviceTitle: "Architectural Design",
      ServiceLogo: architectSvg,
      bgImg:
        "https://www.theinteria.com/BackendImages/BlogImages/the-importance-of-architectural-design-for-houses.jpg",
    },
  ];

  return (

    <div className=" pt-12 h-[165vh]  sm:px-12 sm:pt-12 relative overflow-clip sm:w-screen sm:h-screen bg-[#F8F8F5]">
   <PageHeader {...serviceProps}/>

      <div className="flex flex-wrap px-6 sm:px-0 gap-1 2xl:mt-10 3xl:mt-0 ">
        {services.map((service) => (
          <ServiceCard key={service.serviceTitle} {...service} />
        ))}
      </div>
      <div className="flex gap-3"></div>
    </div>
  );
}

export default ServicesPage;
