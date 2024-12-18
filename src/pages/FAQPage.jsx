import React from 'react'
import FaqSvg from '../assets/icons/faq.svg'
import Button from '../components/button/Button'
import { useEffect , useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accordion, AccordionItem } from '@nextui-org/accordion'

function FAQPage() {
  
  const leftSideRef = useRef(null);
  const container = useRef(null);
 
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: container.current,
      start: 'top top',
      end: 'bottom +=50% ',
      pin: leftSideRef.current,
      markers:false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  const faqs = [
    {
      question: 'WHAT ARCHITECTURAL DESIGN SERVICES DO YOU OFFER?',
      answer:
        'We offer a full range of architectural design services including residential, commercial, landscape, sustainability consulting, interior design, 3D rendering, and construction planning.',
    },
    {
      question: 'WHAT TYPES OF PROJECTS HAVE YOU COMPLETED IN THE PAST?',
      answer:
        'We have extensive experience with custom homes, office spaces, retail stores, hotels, museums, restaurants, high-rises, and more.',
    },
    {
      question: 'WHAT IS YOUR ARCHITECTURAL DESIGN PROCESS STEP-BY-STEP?',
      answer:
        'Our design process includes consultation, schematic design, design development, construction documents, bidding, permitting, and construction administration.',
    },
    {
      question: 'HOW LONG DOES A TYPICAL CUSTOM HOME DESIGN PROJECT TAKE FROM START TO FINISH?',
      answer: 'Our typical custom home design timeline is 6-12 months from initial consultation to completed construction documents.',
    },
    {
      question: 'DO YOU OFFER VIRTUAL 3D WALKTHROUGHS OR RENDERINGS OF DESIGN CONCEPTS?',
      answer:
        'Yes, we use state-of-the-art software to create photorealistic 3D renderings and VR walkthroughs to bring designs to life visually.',
    },
    {
      question: "WHAT MAKES YOUR FIRM'S DESIGN STYLE AND APPROACH UNIQUE",
      answer:
        'Our custom residential designs focus on seamlessly integrating indoor and outdoor spaces while honoring the natural landscape. Our commercial work prioritizes ergonomics and flexible layouts.',
    },
    {
      question: 'ARE YOU ABLE TO WORK WITHIN SPECIFIC BUDGET LIMITATIONS FOR A PROJECT?',
      answer:
        'Yes, we will work closely with you to understand budget needs and engineer cost-efficient solutions without sacrificing quality.',
    },
    {
      question: 'HOW DO YOU INVOLVE CLIENTS THROUGHOUT THE DESIGN PROCESS?',
      answer:
        'We collaborate with clients every step of the way. We also offer 3D walkthroughs of designs to give you an immersive preview before finalization.',
    },
    {
      question: 'HOW CAN I CUSTOMIZE MY BUILDING PROJECT IF I HAVE A VERY SPECIFIC VISION IN MIND?',
      answer:
        'We excel at bringing even the most imaginative custom visions to life through our skilled architectural designers. We love crafting spaces unique to you.',
    },
    {
      question: 'DO YOU HANDLE SECURING PERMITS AND OVERSEEING CONSTRUCTION YOURSELF?',
      answer:
        'Yes, we are a licensed and insured firm that can manage permits, bidding, and construction administration during the building phase.',
    },
    {
      question: 'HOW MUCH DOES IT COST TO HIRE YOU FOR ARCHITECTURAL DESIGN SERVICES?',
      answer:
        'Our fees average 10-15% of total construction costs. We offer free consultations and customized quotes per project.',
    },
    {
      question: 'HAVE YOU WON ANY INDUSTRY AWARDS OR RECOGNITION FOR YOUR WORK?',
      answer:
        'Our award-winning projects have been featured in Architectural Digest, Dwell, ArchDaily, and over a dozen design publications.',
    },]


  return (
    <div ref={container} className=" flex overflow-clip w-full h-[135vh] pl-12 bg-[#F8F8F5] pt-[10vh] pr-10 ">

    <div ref={leftSideRef} className="flex flex-col w-[50%] h-[20vh] relative  ">
      <div className=" text-xs flex flex-row font-satoshi w-full  ">
        <img width={15} src={FaqSvg} alt="" />
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </div>
      <div className=" font-satoshi font-medium text-xl ">
      EVERYTHING YOU MAY NEED TO KNOW
      </div>
      <div className="flex relative  py-6 ">
        <p className=" font-satoshi text-[18px]  ">
        All insights into our expertise provided in easily <br /> digestible nuggets. No question too big or small - ask away!
        </p>
      </div>
      <div className="w-full flex flex-col mt-5 justify-end  ">
        <div className="">
          <Button name={"MORE QUESTIONS?"} />{" "}
        </div>
      </div>
    </div>

    <div id="FAQ-Right" className="Side h-full w-[50%] text-[20px] font-satoshi font-medium flex  border ">
        <Accordion className=" ">
        

          {faqs.map((faq, index) => (
            <AccordionItem key={index} className=" ml-20 " title={faq.question}>
              <div className=' h-[1px] w-full bg-gray-500' ></div>
              <div className="font-normal text-[18px] ">{faq.answer}</div>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
   
  </div>
  )
}

export default FAQPage