import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className=" relative h-screen w-screen overflow-hidden">

      {/* Navbar */}
      <nav className=" fixed flex justify-between  z-10 sm:h-[63px] w-full bg-[#F8F8F5] ">
        <div id="logo">
          <img src="src\assets\logo\pilors.png" width="180px" alt="" />
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
        <ul class="image-loop absolute top-[-100px]">
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
        <h1 className=" text-10xl font-nunito-sans"> PILORS </h1>
        <section id="Hero" className=" absolute bottom-[130px] px-[50px] flex text-[68px] leading-[1em]  z-20 ">
      WE BLEND ART & SCIENCE <br /> TO CREATE <br /> ARCHITECTURAL MAGIC.
      </section>
      </section>
     

    </div>
  );
}

export default Home;
