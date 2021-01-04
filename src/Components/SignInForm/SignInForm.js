import React, { useState } from "react";
import "./SignInForm.css";
import StyledInput from "../StyledInput/StyledInput";
import Button from "../Button/Button";
import Paragraph from "../Paragaraph/Paragraph";
import { connect } from "react-redux";
import { googleLogin, signin } from "../../Redux/user/userActions";

const SignInForm = (props) => {
  var {signin, googleLogin} =props;

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault()
    var auth = {
      email: email,
      password: password
    }
    signin(auth)
  }

  return (
    <div className="signin-form-container">
      <form onSubmit = {handleFormSubmit} className="signin-form">
        <div className="signin-form-fields">
          <StyledInput
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "1rem 0rem" }}
          />
          <StyledInput
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "1rem 0rem" }}
          />
        </div>
        <div className="signin-form-Btn">
          <Button backgroundColor="black" color="white" type="submit">
            SIGN IN
          </Button>
          <div className="signin-separator flex">
           <Paragraph fontSize = {12}>OR</Paragraph>
           </div>

          <Button onClick = {googleLogin} backgroundColor="black" color="white" type="submit">
            SIGN IN WiTH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};
var actions = {
  signin,
  googleLogin

}

export default connect(null,actions)(SignInForm);
