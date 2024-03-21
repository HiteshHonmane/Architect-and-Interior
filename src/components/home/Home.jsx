import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <nav className="w-full h-[63px] bg-gray-500 "></nav>

      <section className=" absolute top w-full h-full overflow-hidden">
     <div>
     <img
          className=" absolute h-full "
          src="https://framerusercontent.com/images/TlNK8dgFohSyX6akaMAsIrmg.jpg?scale-down-to=1024"
          alt=""
        />
     </div>
        <h1 className=" z-10 text-start justify-start h-[100%] w-[100%]  flex items-start text-10xl font-bold text-black bg-white mix-blend-lighten ">
          PILORS
        </h1>
      </section>
      
    </div>
  );
}

export default Home;
