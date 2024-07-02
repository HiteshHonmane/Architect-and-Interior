import React from "react";
import "./Contact.css";
import { useState } from "react";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/location.svg";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div id="mainContainer" className="h-screen w-screen bg-[#141414]">
      {/* Moving animation Component */}
      <div className="carousel-container bg-[#141414] ">
        <ul className="carousel-track">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="carousel-slide">
              <div className="parent-p">
                <span className="dash"></span>
                <p>
                  {index % 2 === 0 ? "LET'S TALK" : "ASK A QUESTION"}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {/* Contact Form */}
        <div className="font-satoshi w-[93vw] flex flex-row h-[31.857rem] bg-white relative mx-auto mt-20">
          <div
            id="left "
            className="bg-[rgb(32,32,32)] w-[51%] h-full flex flex-row"
          >
            <div className="w-full py-32 bg-[rgb(32,32,32)] text-white flex flex-col flex-wrap">
              {['PHONE', 'VISIT US', 'EMAIL'].map((title, index) => (
                <div
                  key={index}
                  id={title.toLowerCase()}
                  className={`w-full px-8 ${
                    index === 1 ? 'border-b border-[rgb(55,55,55)]' : ''
                  } h-[33%] flex gap-[${index === 1 ? '120' : '115'}px] items-center`}
                >
                  <div className="flex gap-3">
                    <img
                      className="invert"
                      width={18}
                      src={index === 1 ? location : index === 0 ? phone : email}
                      alt=""
                    />
                    <span className="font-satoshi font-normal">
                      {title.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    {index === 0 ? (
                      <div>+91 74474 XXXX</div>
                    ) : index === 1 ? (
                      <div className="flex flex-col items-start">
                        Pilors Architecture India
                        <button className="text-[12px]">SEE ON MAP</button>
                      </div>
                    ) : (
                      <div>pilxxxxxhitect@gmail.com</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="right" className="relative p-5 w-[61%] h-full">
            <div className="w-[71%] gap-5 mx-auto mt-6 flex flex-col">
              <h3 className="font-satoshi font-medium text-base">
                GET A FREE QUOTE
              </h3>
              <p className="text-[17px]">
                We're excited to connect with you! Fill out the form below, and
                let's embark on the journey of turning your vision into a
                reality.
              </p>
            </div>

            <form className="flex mt-11 gap-4 flex-wrap" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-[49%] h-[52px] bg-[rgb(235,235,235)] p-4"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Email"
                className="w-[49%] h-[52px] bg-[rgb(235,235,235)] p-4"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                placeholder="Message"
                className="w-[100%] h-40 bg-[rgb(235,235,235)] p-4 placeholder:flex"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="bg-black text-white w-full h-[52px]">
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
