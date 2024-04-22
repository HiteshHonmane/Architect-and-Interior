import React from "react";

function BlogSecondPage() {
  return (
    <div className=" w-full h-screen">
      <div className=" flex relative">
        <img
          className=" w-full h-full "
          src="https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024"
          alt=""
        />
        <div className=" absolute h-[50%]  w-full bg-black flex flex-col  justify-center  ">
          <h1 className=" relative bg-black text-white text-3xl h-[20%] w-[50%] text-center flex items-start ">
            THE SOCIAL IMPACT OF ARCHITECTURAL INNOVATION
          </h1>
          <p className=" text-white w-[50%]  ">
            Verdant believes that architecture goes beyond creating physical
            spaces; it has the power to be a social catalyst. Our projects are
            designed with a purpose, aiming to foster community engagement,
            inclusivity, and a sense of belonging. It's about breaking down
            walls and building bridges between people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogSecondPage;
