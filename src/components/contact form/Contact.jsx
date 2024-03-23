import React from "react";
import "./Contact.css";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location.svg";

function Contact() {

  const submitHandler = ((e)=>{
   prevent.default(e)
  })


  return (
    <div id="mainContainer" className=" h-screen w-screen bg-black">
      // Moving animation Component
      <div class="carousel-container">
        <ul class="carousel-track">
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>LET'S TALK</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>ASK A QUESTION</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"></span>
              <p>GET IN TOUCH</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>LET'S TALK</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>ASK A QUESTION</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"></span>
              <p>GET IN TOUCH</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>LET'S TALK</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>ASK A QUESTION</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"></span>
              <p>GET IN TOUCH</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>LET'S TALK</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"> </span>
              <p>ASK A QUESTION</p>
            </div>
          </li>
          <li class="carousel-slide">
            <div class="parent-p">
              <span class="dash"></span>
              <p>GET IN TOUCH</p>
            </div>
          </li>
        </ul>
        //Contact Form
        <div className=" font-satoshi  w-[88vw] flex flex-row  h-[31.857rem] bg-white relative mx-auto  mt-20">
          <div
            id="left "
            className=" bg-[rgb(32,32,32)]  w-[51%] h-full flex flex-row "
          >
            <div className=" w-full py-32 bg-[rgb(32,32,32)]  text-white flex flex-col flex-wrap ">
              <div
                id="phone"
                className="w-full px-8 border-b border-[rgb(55,55,55)]   h-[33%] flex gap-[120px] items-center  "
              >
                <div className="flex gap-3 ">
                  <img className=" invert " width={18} src={phone} alt="" />
                  <span className=" font-satoshi font-normal " >PHONE</span>
                </div>

                <div>
                  <div>+91 74474 42448</div>
                </div>
              </div>

              <div
                id="phone"
                className="w-full px-8 font- h-[33%] flex gap-[115px] items-center  "
              >
                <div className="flex gap-3 ">
                  <img className=" invert " width={18} src={location} alt="" />
                  <span>VISIT US</span>
                </div>

                <div>
                  <div className="flex flex-col items-start">
                    Pilors Architecture Nagpur Maharashatra
                    <button className=" text-[12px] ">SEE ON MAP</button>
                  </div>
                </div>
              </div>

              <div
                id="phone"
                className="w-full px-8  h-[33%] flex gap-[130px] items-center border-t border-[rgb(55,55,55)]   "
              >
                <div className="flex gap-3 ">
                  <img className=" invert " width={18} src={email} alt="" />
                  <span>EMAIL</span>
                </div>

                <div>
                  <div className=" " >pilorsarchitect@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

{/* //Right side Contact Form */}
          
          <div id="right" className="  relative p-5 w-[61%]  h-full">
            <div className=" w-[71%] gap-5 mx-auto mt-6 flex flex-col   ">
             <h3 className="  font-satoshi font-medium text-base  ">GET A FREE QUOTE</h3>
              <p className="  text-[17px]">
                We're excited to connect with you! Fill out the form below, and
                let's embark on the <br /> journey of turning your vision into a
                reality.
              </p>
            </div>
            
{/* Input Form */}
            <form className="flex mt-11 gap-4 flex-wrap ">
              <input type="text" placeholder="Name"  className="  w-[49%] h-[52px]  bg-[rgb(235,235,235)] p-4"  />

              <input type="email" placeholder="Email" className=" w-[49%] h-[52px] bg-[rgb(235,235,235)] p-4"/>

              <input type="text"  placeholder="Message" className=" w-[100%] h-40  bg-[rgb(235,235,235)]  p-4 placeholder:flex "/>

              <button type="submit" onSubmit={submitHandler} className=" bg-black text-white w-full h-[52px]   ">
               SUBMIT
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
