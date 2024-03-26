import React from "react";
import "./Home.css";
import Button from '../button/Button'

function Home() {
  return (
    <div className=" relative h-screen w-screen overflow-hidden">

      {/* Navbar */}
      <nav className=" fixed flex justify-between  z-30 sm:h-[63px] w-full bg-[#F8F8F5] ">
        <div id="logo">
          <img src="/pilors.png" width="170px" alt="" />
        </div>
        <ul id="nav-itmes" className="flex gap-4 items-center px-4 ">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PROJECTS</li>
          <li>BLOGS</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      {/* Blend Animation section */}
      <section>
        <ul class="image-loop absolute top-[-100px] brightness-75">
          <li>
            <img 
              src="https://framerusercontent.com/images/TlNK8dgFohSyX6akaMAsIrmg.jpg?scale-down-to=1024"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://framerusercontent.com/images/TlNK8dgFohSyX6akaMAsIrmg.jpg?scale-down-to=1024"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://framerusercontent.com/images/TlNK8dgFohSyX6akaMAsIrmg.jpg?scale-down-to=1024"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://framerusercontent.com/images/TlNK8dgFohSyX6akaMAsIrmg.jpg?scale-down-to=1024"
              alt=""
            />
          </li>
        </ul>
        <h1 className=" px-4 text-10xl font-nunito-sans "> PILORS </h1>

       <section id="Hero" className=" absolute bottom-[130px] px-[50px] flex justify-between  z-10 w-full ">
        <div className="  text-[68px] leading-[1em] ">
        WE BLEND ART & SCIENCE <br /> TO CREATE <br /> ARCHITECTURAL MAGIC.
        </div>

      <div className=" flex flex-col gap-8 mr-16 ">
      <p className=" font-satoshi font-normal text-base">
        We've built our reputation by taking even the <br /> boldest visions and making them achievable <br /> realities.
        </p>
        <div>
          {/* //passing Props */}
        <Button name={"VIEW PROJECT"}/>
        </div>
        
        
      </div>
      
       </section>
      </section>
      
     

    </div>
  );
}

export default Home;
