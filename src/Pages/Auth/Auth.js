import React from "react";
import "./Auth.css";
import AuthForms from "../../Components/AuthForms/AuthForms";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  var { user } = props;
  return (
    <div className="auth-container">
      {!user ? (
        <div className="auth-container-content">
          <div className="auth-img"></div>
          <div className="flex auth-form-area">
            <AuthForms />
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};
var mapStateToProps = (state) => ({
  user: state.currentUser.currentUser,
});

export default connect(mapStateToProps)(Auth);
