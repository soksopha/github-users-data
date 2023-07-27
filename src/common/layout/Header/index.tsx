import React from "react";
import "./style.css";

const Header: React.FC = () => {
  const logo = "../../../logo.png";
  
  return (
    <div className="header">
        <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;


