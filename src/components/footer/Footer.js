import React from "react";
import "./footer.css";
import Logo from "../../assets/icons/nv2s-logo.png";

const Footer = () => {
  return (
    <div>
      {/*
      <div className="py-2 text-center footer-style">
        Made with ❤️ by Adiba Abid ©️&nbsp; {new Date().getFullYear()}
      </div>
       */}
      {/*
      <div className="py-2 text-center footer-style">
        <img className="logo" src={Logo} alt="Logo" width="200" height="200" />
      </div>
       */}
      <div className="py-2 text-center footer-style">
        NV2S ©️&nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
