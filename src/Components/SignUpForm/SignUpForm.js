import React, { useState } from "react";
import "./SignUpForm.css";
import StyledInput from "../StyledInput/StyledInput";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { signup } from "../../Redux/user/userActions";


const SignUpForm = (props) => {
  var {signup} = props
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

var handleFormSubmit = (e) => {
    e.preventDefault()
    var auth = {
      fullName: fullName,
      email: email,
      password: password
    }
    signup(auth)
  }

  return (
    <div className="signin-form-container">
      <form onSubmit = {handleFormSubmit} className="signin-form">
        <div className="signin-form-fields">
          <StyledInput
            value={fullName}
            placeholder="fullName"
            onChange={(e) => setFullName(e.target.value)}
            style={{ margin: "1rem 0rem" }}
          />
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
            SIGN UP
          </Button>
        </div>
      </form>
    </div>
  );
};
var actions = {
  signup
}
export default connect(null,actions)(SignUpForm);
