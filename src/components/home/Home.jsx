import React, { useState } from "react";
import "./Home.css";
import Button from "../button/Button";
import Loading from "./Loading";
import Hamburger from "./Hamburger";

function Home() {
  const NAV_LINK_CLASSES = "py-2 text-lg text-zinc-900 font-semibold";
  const SUB_NAV_LINK_CLASSES = "block py-1 text-[20px] text-zinc-700";

  const [navVisible, setNavVisible] = useState(false); // Initialize navVisible with false

  const hamburgerClick = () => {
    setNavVisible(!navVisible); // Toggle the navVisible state
  };

  const font = {
    fontS: " font-satoshi ",
    fontnunito: " font-nunito-sans",
  };

  return (
    <div className=" relative h-[100vh] w-[100vw] overflow-hidden">
      {/* Navbar */}
      <nav
        className={`bg-white shadow-lg flex justify-center items-center w-full h-[100vh] fixed z-40 transition-all duration-1000 ease-in-out   ${
          navVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-center">
          <div className="text-zinc-700">
            <div className="flex flex-col">
              <a href="#" className={NAV_LINK_CLASSES}>
                HOME
              </a>
              <a href="#" className={NAV_LINK_CLASSES}>
                ABOUT
              </a>
              <div className="py-2">
                <span className="text-sm text-zinc-900 font-semibold">
                  SERVICES
                </span>
                <div className="ml-4">
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    ALL
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    ARCHITECTURAL DESIGN
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    INTERIOR DESIGN
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    URBAN PLANNING
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    LANDSCAPING DESIGN
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    CONSTRUCTION MANAGEM.
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    BUILDING RENOVATION
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    LIGHTING DESIGN
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    FEASIBILITY STUDIES
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    BUILDING CODE COMPLIANCE
                  </a>
                  <a href="#" className={SUB_NAV_LINK_CLASSES}>
                    3D VISUALIZATION
                  </a>
                </div>
              </div>
              <a href="#" className={NAV_LINK_CLASSES}>
                PROJECTS
              </a>
              <a href="#" className={NAV_LINK_CLASSES}>
                GALLERY
              </a>
              <a href="#" className={NAV_LINK_CLASSES}>
                BLOGS
              </a>
              <a href="#" className={NAV_LINK_CLASSES}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* //Loading animation */}
      <div className=" fixed z-[100] slide-out-left  ">
        <Loading />
      </div>

      {/* Hamburger icon */}
      <nav className=" fixed flex justify-between flex-row   z-50 sm:h-[63px] w-full bg-[#F8F8F5] border-b ">
        <div id="logo">
          <img
            className=" sm:w-[200px] w-44 "
            src="/pilors black.png"
            width=""
            alt=""
          />
        </div>
        <div onClick={hamburgerClick} className="invert sm:pr-5 flex">
          <Hamburger />
        </div>
      </nav>

      {/* Blend Animation section */}
      <section className=" ">
        <ul class="image-loop object-cover h-[30vh] xl:h-[80vh] 2xl:h-[80vh] sm:h-[80vh] lg:h-[30vh]   absolute  sm:top-[-100px] brightness-75">
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
        <h1
          className={`" lg:text-9xl xl:mt-0  2xl:mt-0 xl:pl-8 2xl:pl-0  xl:text-[22rem] 2xl:text-10xl sm:relative relative pb-[12vh] sm:mb-96 px-auto sm:px-4 pt-4 bg-[#F8F8F5] top-12 sm:text-10xl text-8xl ${font.fontnunito}  "`}
        >
          PILORS
        </h1>

        <section
          id="Hero"
          className=" absolute sm:bottom-[130px] sm:px-[50px]  flex sm:justify-between  flex-col sm:flex-row z-10 w-full bg-[#F8F8F5] "
        >
          <div
            className={`" ${font.fontS} sm:text-3xl text-3xl leading-[1em] font-medium text-center sm:text-start sm:flex-col px-1  "`}
          >
            <span className=" sm:flex flex">
              WE BLEND ART & SCIENCE TO CREATE
            </span>
            <span className=" sm:w-full ">ARCHITECTURAL MAGIC.</span>
          </div>
          <div className=" flex flex-col gap-8 sm:mr-16 mt-4 sm:mt-0 ">
            <p
              className={`" ${font.fontS} sm:font-normal sm:text-base text-center px-8 "`}
            >
              We've built our reputation by taking even the boldest visions and
              making them achievable realities.
            </p>
            <div className=" sm:px-0 px-24 flex justify-center  ">
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
