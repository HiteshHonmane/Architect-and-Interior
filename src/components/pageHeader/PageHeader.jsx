import React from 'react';
import Button from '../button/Button'; // Adjust the import path as necessary

const PageHeader = (props) => {
  return (
    <div className="flex justify-center sm:justify-start sm:items-start items-center flex-col w-full h-[40vh]">
      <div className="text-xs flex flex-row font-satoshi mb-3 sm:mb-0 ">
        <img width={15} src={props.ServicesSvg} alt="" />
        {props.title}
      </div>
      <div className="text-center mb-2 sm:mb-0 sm:text-start font-satoshi font-medium text-xl">
        {props.Headline}
      </div>
      <div className="flex sm:w-screen relative justify-center px-3 sm:px-12 sm:py-6 sm:justify-end">
        <p className="flex font-satoshi text-center sm:text-start justify-end text-[18px] mb-5 sm:mb-0 sm:pr-12">
          {props.Description}
        </p>
      </div>
      <div className="w-[90%] sm:w-full h-[1px] bg-[#141414]"></div>
      <div className="w-full flex mt-5 justify-center sm:justify-end">
        <div>
          <Button name={props.buttonName} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
