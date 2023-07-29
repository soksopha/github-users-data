import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import "./style.css";

const Header: React.FC = () => {
  const logo = "../../../logo.png";
  
  return (
    <AppBar component="nav" elevation={1} className="header">
        <Container>
          <div className="logo">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </Container>
    </AppBar>
  );
};

export default Header;


