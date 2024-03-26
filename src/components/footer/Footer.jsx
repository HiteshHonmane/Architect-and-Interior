import React from "react";
import sketch from "../../assets/images/sketch.svg";

function Footer() {
  return (
    <>
      <div className="overflow-hidden w-screen  h-screen bg-[#141414] relative ">
        <img
          className=" absolute  opacity-50 w-full h-[80vh] invert object-cover object-bottom scale-150 "
          src={sketch}
          alt=""
        />
        <div className="flex flex-wrap relative  h-96  justify-around top-36   text-white">
          <div className=" flex flex-col gap-4 font-Manrope text-base ">
            NAVIGATE
            <ul className="text-[16px] font-satoshi ">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className=" flex flex-col gap-4 font-Manrope text-base ">
            SERVICES
            <ul className=" text-[16px] font-satoshi">
              <li>Architectural Design</li>
              <li>3D Visualization</li>
              <li>Landscaping Design</li>
              <li>Residential Design</li>
              <li>Functional Spaces</li>
              <li>Renovation</li>
              <li>Interior Design</li>
              <li>Commercial Spaces</li>
              <li>Planning & Strategies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className=" flex flex-col gap-4 font-Manrope text-base ">
            PROJECTS
            <ul className=" font-satoshi text-[16px]">
              <li>All</li>
              <li>Hospitality</li>
              <li>Residential</li>
              <li>Private Residence</li>
              <li>Commercial</li>
              <li>Historic</li>
            </ul>
          </div>

          <div className=" flex flex-col gap-4 font-Manrope text-base   ">
            LEGEL
            <ul className=" font-satoshi text-[16px] ">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-full flex flex-wrap justify-center  absolute   ">

          <div className=" text-white flex flex-wrap justify-center w-[25rem] h-20 font-Manrope mt-36 ">
            SUBSCRIBE TO OUR NEWSLETTER
            <div className=" flex w-full gap-2 ">
              <input
                className=" bg-[#85858545] py-1  text-white  px-2 w-[60%] font-satoshi  "
                type="email"
                placeholder="name@email.com"
              />

              <button className=" w-[40%] font-satoshi font-medium text-black bg-white">
                Subscribe
              </button>
            </div>
          </div>

        <div className="w-full justify-center  h-full flex flex-col absolute ">
          <div className="text-white h-[50%]  w-full absolute flex flex-wrap   justify-center mt-36  text-[20px] overflow-hidden   ">
          FOLLOW US ON:
          </div>

          <div className="w-full justify-center text-white  h-full flex flex-col absolute" >
          <ul className=" flex  ">
            <li>
              <img src="" alt="" />
              <span className="text-white">Facebook</span>
            </li>

            <li>
            
              <span>Facebook</span>
            </li>
          </ul>
          </div>

        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
