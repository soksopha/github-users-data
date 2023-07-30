import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import "./style.css";

const Footer: React.FC = () => {
  const logo = "../../../logo.png";
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setIsFooterVisible(prevScrollY > currentScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <AppBar
        position="fixed"
        elevation={1}
        color="primary"
        sx={{ top: "auto", bottom: 0, transition: "transform 0.3s" }}
        className={`footer-container ${isFooterVisible ? "" : "footer-hidden"}`}
    >
        <Container>
          <div className="footer-logo">
            <img src={logo} className="logo" alt="logo" />
            <div className="overlay"></div>
          </div>
        </Container>
    </AppBar>
  );
};

export default Footer;


