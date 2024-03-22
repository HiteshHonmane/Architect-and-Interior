import React from "react";
import "./Contact.css";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location.svg";

function Contact() {
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
        <div className="w-[88vw] justify-center items-center h-[31.857rem] bg-white relative mx-auto  mt-20">
          <div
            id="left "
            className=" bg-[rgb(32,32,32)] absolute w-[51%] h-full flex flex-row "
          >
            <div className=" w-full bg-gray-400 ">
              <div
                id="phone"
                className="w-full h-[33%] flex justify-center items-center border "
              >
                <img width={20} src={phone} alt="" />
                <span>Phone</span>
              </div>
              <div
                id="location"
                className="w-full h-[33%] flex justify-center items-center border "
              >
                <img width={20} src={location} alt="" />
                <span>Address</span>
              </div>
              <div
                id="email"
                className="w-full h-[33%] flex justify-center items-center border "
              >
                <img width={20} src={email} alt="" />
                <span>Email</span>
              </div>
            </div>

            <div className=" "></div>
          </div>
          <div id="right" className=" absolute  h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
