import React from "react";
import "./Header.css";
import { fontWeightParser } from "../../Utility/Utility";

const Header = (props) => {
  var {
    children,
    fontColor = "black",
    fontWeight = "regular",
    fontSize = 32 ,
    style = {}

  } = props;
  var fontWeightValue = fontWeightParser(fontWeight);
  

  return (
    <div
      style={{
        color: fontColor,
        fontWeight: fontWeightValue,
        fontSize: `${fontSize / 10}rem`,
        ...style
      }}
      className="header-container"
    >
      {/* <Navbar><h1>abc</h1></Navbar>  */}

      {/* Because font-size in header.css is already specified for heading thereis no need of h1 tag */}
      {children}
    </div>
  );
};

export default Header;
