import React from "react";

function BlogSecondPage() {
  const font = {
    font: " font-satoshi ",
  };

  return (
    <div className=" w-full h-screen">
      <div className=" flex relative">
        <img
          className=" w-full h-full "
          src="https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024"
          alt=""
        />
        <div className=" absolute h-[50%] bg-gradient-to-b from-[#000] to-[#0000007c]  w-[100vw]bg-gradient-to-b  flex flex-col  justify-center  items-center ">
          <h1
            className={`" relative bg-black text-white text-[68px] h-[30%] w-[40%] text-center flex items-start font-medium  ${font.font} "`}
          >
            THE SOCIAL IMPACT OF <br /> ARCHITECTURAL <br /> INNOVATION
          </h1>
          <p
            className={`" text-white w-[35%] ${font.font} text-[24px]  text-gray-300  text-center  "`}
          >
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
