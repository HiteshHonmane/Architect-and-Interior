import React from "react";
import AboutusSvg from "../../../public/assets/icons/aboutus.svg";

const accordionItems = [
  {
    title: "AWARD-WINNING DESIGNS",
    content: "Details about award-winning designs.",
  },
  {
    title: "FLAWLESS PROJECT EXECUTION",
    content: "Details about flawless project execution.",
  },
  {
    title: "INDUSTRY LEADING SUSTAINABILITY",
    content: "Details about industry leading sustainability.",
  },
  {
    title: "PERSONALIZED COLLABORATIVE PROCESS",
    content: "Details about personalized collaborative process.",
  },
  {
    title: "TECHNICAL MASTER CRAFTSMANSHIP",
    content: "Details about technical master craftsmanship.",
  },
  {
    title: "INVESTED IN YOUR SUCCESS",
    content: "Details about being invested in your success.",
  },
];

const accordionClassNames = {
  button:
    "accordion-button flex justify- items-center h-full w-full py-2 px-4  text-left text-lg font- font-satoshi  text-[20px] ",
  content: "accordion-content hidden p-4 ",
};

const Special = () => {
  const toggleAccordion = (event) => {
    const item = event.target;
    const content = item.nextElementSibling;
    if (content.classList.contains("hidden")) {
      document
        .querySelectorAll(".accordion-content")
        .forEach((el) => el.classList.add("hidden"));
      document
        .querySelectorAll(".plus")
        .forEach((el) => (el.textContent = "+"));
      content.classList.remove("hidden");
      item.querySelector(".plus").textContent = "-";
    } else {
      content.classList.add("hidden");
      item.querySelector(".plus").textContent = "+";
    }
  };

  return (
    <div className="w-[100vw] mx-auto h-[100vh] px-4 py-8  gap-[10vw] bg-[#F8F8F5]    ">
      <div className="top w-[100vw] h-[20vh] flex font-satoshi font-semibold justify-center">
        <div className=" uppercase text-black text-3xl ">
          Why we are Special?
        </div>
      </div>
      <div className=" w-[100vw] h-[80vh] flex flex-wrap ">
        <div className="left w-[50vw] h-[80vw] ">
          <img
            className=" w-[800px] h-[632px] "
            src="https://framerusercontent.com/images/8OQBKTI9WBnLCVJXabrhbXA60.svg?scale-down-to=1024 "
            alt=""
          />
        </div>
        <div className="right w-[45vw] h-[80vw] ">
          <div className="flex flex-col   ">
            <div className=" text-xs flex flex-row font-satoshi">
              <img width={15} src={AboutusSvg} alt="" />
              ABOUT US
            </div>
            <div className=" font-satoshi font-medium text-xl ">
              DREAM. DESIGN. DEVELOP. <br />
              WE MAKE EVEN BOLD DREAMS INTO FINISHED PRODUCTS.
            </div>
            <div className="flex relative px-12 py-6 ">
              {/* <p className=" font-satoshi text-[18px]  ">
                We make even the wildest architectural dreams into <br />{" "}
                dramatic yet feasible finished products anyone <br />
                would be proud of.
              </p> */}
            </div>
            <div id="accordion flex ">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="accordion-item mb-4 flex items-start justify-start flex-wrap w-[40vw] "
                >
                  <button
                    className={accordionClassNames.button}
                    onClick={toggleAccordion}
                  >
                    <img width={15} src={AboutusSvg} alt="" />
                    {item.title}
                    <span className="plus">+</span>
                  </button>
                  <div className={accordionClassNames.content}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
