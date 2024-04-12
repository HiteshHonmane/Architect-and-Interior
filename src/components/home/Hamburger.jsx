import React, { useState } from "react";
import "./Hamburger.css";

function Hamburger() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`hamburger ${isActive ? 'is-active' : ''} z-40`} onClick={handleClick}>
      <div className="hamburger__container">
        <div className="hamburger__inner"></div>
        <div className="hamburger__hidden"></div>
      </div>
    </div>
  );
}

export default Hamburger;
