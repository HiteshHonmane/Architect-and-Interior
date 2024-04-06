import React from "react";
import ceoImgage from "../../assets/team images/team-ceo.png";
import cooImg from "../../assets/team images/team-coo.png";
import cmoImg from "../../assets/team images/team-cmo.png";
import ourteamsvg from "../../assets/team images/ourteam.svg";

function Team() {
  return (
    <div className=" px-12 pt-6 w-[100vw] h-[100vh] flex flex-col relative overflow-x-hidden bg-[#F8F8F5]  ">
      <div className=" overflow-hidden w-full h-[15vh] flex flex-col  ">
        <div className="  font-satoshi flex gap-2 text-[#0d0d0da0] text-xs">
          <img className="" src={ourteamsvg} width={18} alt="" />
          OUR TEAM
        </div>
        <div className=" overflow-hidden text-xl font-satoshi font-medium">
          THE SKILL & SOUL BEHIND OUR PROJECTS
        </div>
      </div>
      {/* //Images section */}
      <div className="flex mx-auto ">
        <div className="  w-[466px] h-[465px]">
          <img
            className=" transition-transform duration-500 transform hover:scale-110 absolute  w-[466px] h-[465px]  "
            src={cooImg}
            alt=""
          />
          <div className="  text-white text-base font-Manrope p-3 flex w-full relative gap-[55%] font-normal">
            <span>Pranay Sonekar</span>
            <span className=" font-extralight tracking-[0.3rem] py-1 text-sm ">
              CEO
            </span>
          </div>
        </div>

        <div className=" mt-10  w-[466px] h-[465px]">
          <img
            className=" transition-transform duration-500 transform hover:scale-110 absolute  w-[466px] h-[465px] "
            src={cmoImg}
            alt=""
          />
          <div className=" text-white text-base font-Manrope p-3 flex w-full relative gap-[55%] font-normal">
            <span></span>
            <span className="font-extralight tracking-[0.3rem] py-1 text-sm  ">
              CEO
            </span>
          </div>
        </div>
        <div className=" mt-20  w-[466px] h-[465px]">
          <img
            className=" transition-transform duration-500 transform hover:scale-110 absolute  w-[466px] h-[465px] "
            src={cmoImg}
            alt=""
          />
          <div className=" text-white text-base font-Manrope p-3 flex w-full relative gap-[55%] font-normal">
            <span>Shruti Singh</span>
            <span className="font-extralight tracking-[0.3rem] py-1 text-sm  ">
              CEO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
