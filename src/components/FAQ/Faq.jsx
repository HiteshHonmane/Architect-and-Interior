import React, { useState } from "react";
import plusSvg from '../../assets/icons/plus.svg';

function Faq(props) {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className="w-full mt-6 border-b flex flex-col cursor-pointer  ">
            <div className="flex px-11 h-16 gap-20 items-center align-middle hover:bg-[#EDEDEA] hover:transition-all duration-500 ease-out  " onClick={toggleExpand}>
                <img src={plusSvg} width={14} alt="" />
                <div className="flex font-satoshi font-medium text-base text-[#20201F] w-[100%] ">
                  {props.question}
                </div>
            </div>
            <div className={`faq-answer p-2 font-satoshi text-base font-normal transition-all duration-500 ease-in-out ml-10 ${isExpanded ? 'block' : 'hidden'}`}>
                {props.answer}
            </div>
            
        </div>
    );
}

export default Faq;
