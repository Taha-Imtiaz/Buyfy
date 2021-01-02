import React from 'react'
import "./Paragraph.css"
import { fontWeightParser } from '../../Utility/Utility';

const Paragraph = (props) => {
    var {
        children,
        fontColor = "black",
        fontWeight = "regular",
        fontSize = 16 ,
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
          className="paragraph-container"
        >
          {/* <Navbar><h1>abc</h1></Navbar>  */}
    
          {/* Because font-size in paragraph.css is already specified for heading thereis no need of p tag */}
          {children}
        </div>
      );
}

export default Paragraph
