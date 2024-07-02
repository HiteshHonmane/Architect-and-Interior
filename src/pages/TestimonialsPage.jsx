import React from 'react'
import TestmonialLogo from '../assets/testimonialsImg/testimonial.svg'
import TestimonialCard from '../components/testimonials/TestimonialCard'
import Button from '../components/button/Button'


function TestimonialsPage() {
  const clients = [
    {
      name: "- Martin Hayes, Museum Director", 
      titel: 'This museum expansion is my new pride and joy....',
      clientImg: "https://framerusercontent.com/images/x33ze80qt7hAtBDu5VA1wwFw5qI.jpg?scale-down-to=512",
      review: '"I’ve never worked with architects who balanced creative ingenuity with the ability to pull off ambitious designs - until now. This museum expansion is my new pride and joy." ',
      workImg: "https://framerusercontent.com/images/XIWzGTbchPF3j20s47w5ViA4s3A.jpg?scale-down-to=512",
      work: 'Art Museum Expansion',
      location: 'Malibu, calfornia'
    },
    {
      name: "- Kevin Wu, CEO, CloudSmart", 
      titel: 'Our leed plantinum office building now serves as a ....',
      clientImg: "https://framerusercontent.com/images/dd62dYQNyyynWEmy6n61i7CltYc.jpg",
      review: '"We interviewed dozens of firms but their passion for imaginative sustainable spaces set them apart. Our LEED Platinum office building now serves as a showcase."',
      workImg: "https://framerusercontent.com/images/iQbRfe5SBQDYjdZbJrs1uhRXYA.jpg?scale-down-to=512",
      work: 'Art Museum Expansion',
      location: 'CloudSmart Corporate'
    }
  ];

  return (
    <div id='main-container' className='px-12 overflow-clip w-screen h-full bg-[#F8F8F5] '>
      <div className='flex flex-col w-full h-[35vh] '>
        <div className='flex flex-row font-satoshi'>
          <img width={15} src={TestmonialLogo} alt="" />
          <div className='ml-2'>TESTIMONIALS</div>
        </div>
        <div className='font-satoshi font-medium text-xl'>
          SEE WHAT OUR CLIENTS HAVE TO SAY ABOUT PARTNERING <br />
          WITH US ON CUSTOM ARCHITECTURAL PROJECTS
        </div>
        <div className='relative px-12 py-6 justify-end'>
          <p className='font-satoshi text-[18px]'>
            We let our meticulously crafted work speak for itself, <br />
            but also value our clients' candid experiences <br />
            collaborating with us.
          </p>
        </div>
        <div className='w-full h-[2px] bg-[#141414]' />
      </div>
      <div className='flex gap-3 pb-12'>
        {clients.map((client, index) => (
          <TestimonialCard key={index} {...client} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage