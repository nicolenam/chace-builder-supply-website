import React, { useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handleClick = () => {
    setShowHeader(false);
  };

  return (
    <header>
      {showHeader && (
        <div className="headerContainer">
          <div className="headerContent">
            <div className="headerText">
              <p>
                You can now text our store at
                <a className="">(437)-747-8473</a>
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sc-bIyKgX iLWVze"
            onClick={handleClick}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      )}
    </header>
  );
};

export default Header;
