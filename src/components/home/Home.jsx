import React from "react";
import "./Home.css";
import Button from "../button/Button";
import Loading from "./Loading";
import Hamburger from "./Hamburger";

function Home() {
  return (
    <div className=" relative h-[100vh] w-[100vw] overflow-hidden">
      {/* //Loading animation */}
      <div className=" absolute z-40 slide-out-left  ">
        <Loading />
      </div>
      {/* Navbar */}
      <nav className=" fixed flex justify-between flex-row   z-30 sm:h-[63px] w-full bg-[#F8F8F5] border-b ">
        <div id="logo">
          <img
            className=" sm:w-[200px] w-44 "
            src="/pilors black.png"
            width=""
            alt=""
          />
          
        </div>
        <div className=" z-40 invert sm:pr-5">
          <Hamburger/>
        </div>
       




        {/* <ul id="nav-itmes" className="hidden gap-4 items-center px-4 ">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PROJECTS</li>
          <li>BLOGS</li>
          <li>CONTACT</li>
        </ul> */}
      </nav>

      {/* Blend Animation section */}
      <section className=" ">
        <ul class="image-loop object-cover h-[30vh] sm:h-[80vh]  absolute  sm:top-[-100px] brightness-75">
          <li>
            <img className=" sm:w-full   " src="/moving-bg.jpg" alt="" />
          </li>
          <li>
            <img className=" w-full " src="/moving-bg.jpg" alt="" />
          </li>
          <li>
            <img className=" w-full " src="/moving-bg.jpg" alt="" />
          </li>
          <li>
            <img className=" w-full " src="/moving-bg.jpg" alt="" />
          </li>
        </ul>
        <h1 className=" sm:absolute relative pb-[12vh] sm:pb-0 px-auto sm:px-4 pt-4 bg-[#F8F8F5] top-12 sm:text-10xl text-8xl font-nunito-sans ">
          {" "}
          PILORS{" "}
        </h1>

        <section
          id="Hero"
          className=" absolute sm:bottom-[130px] sm:px-[50px]  flex sm:justify-between  flex-col sm:flex-row z-10 w-full "
        >
          <div className=" font-satoshi  sm:text-3xl text-3xl leading-[1em] font-medium text-center sm:text-start sm:flex-col px-1  ">
            <span className=" sm:flex flex" >WE BLEND ART & SCIENCE TO CREATE</span>
            <span className=" sm:w-full " >
              ARCHITECTURAL MAGIC.
            </span>
          </div>
          <div className=" flex flex-col gap-8 sm:mr-16 mt-4 sm:mt-0 ">
            <p className=" font-satoshi sm:font-normal sm:text-base text-center px-8 ">
              We've built our reputation by taking even the  boldest
              visions and making them achievable  realities.
            </p>
            <div className=" sm:px-0 px-24 "> 
              {/* //passing Props */}
              <Button name={"VIEW PROJECT"} />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
