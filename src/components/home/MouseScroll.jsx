import React from 'react';

const MouseScroll = () => {
  return (
    <div className=" ">
      <div className="w-6 h-24">
        <div className="w-6 h-10 border-2 border-black rounded-full mb-1">
          <div className="w-1 h-1 bg-black rounded-full mx-auto mt-1 animate-mouse-wheel"></div>
        </div>
        <div className="flex flex-col items-center">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`block w-4 h-4 border-r-2 border-b-2 border-black transform rotate-45 mb-1 animate-mouse-scroll`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MouseScroll;