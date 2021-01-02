import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Paragraph from "../../Components/Paragaraph/Paragraph";
import Button from "../../Components/Button/Button";
import StyledInput from "../../Components/StyledInput/StyledInput";

const Home = () => {
  var [email, setEmail ] = useState("");
  
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/test">
        <button>Test</button>
      </Link>
      <Header
        fontColor="red"
        fontWeight="light"
        fontSize={24}
        style={{ letterSpacing: "5px" }}
      >
        This is my dynamic content
      </Header>
      {/* <Header> <div> <p>abc</p></div></Header> */}
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        accusamus a provident cum, natus beatae deleniti sunt voluptatibus
        voluptas eaque quae doloremque, molestias dolor animi dolore obcaecati
        laboriosam saepe quasi.
      </Paragraph>
      <input
        type="text"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder = "hello world"
      />
      <Button>submit</Button>
      <div style={{ width: "600px", margin: "4rem" }}>
        <StyledInput placeholder = "enter email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
      </div>
    </div>
  );
};

export default Home;
