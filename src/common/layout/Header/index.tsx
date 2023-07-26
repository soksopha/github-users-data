import React from "react";
import "./style.css";

const Header: React.FC = () => {
  const logo = "../../../logo.png";
  
  return (
    <div className="container">
        <div className="header">
            <img src={logo} alt="logo" />
        </div>
    </div>
  );
};

export default Header;


