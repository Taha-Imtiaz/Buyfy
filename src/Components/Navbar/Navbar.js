import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CartNavItem from "../CartNavItem/CartNavItem";
import CartDropdown from "../CartDropdown/CartDropdown";
import { connect } from "react-redux";
import { signout } from "../../Redux/user/userActions";
const Navbar = (props) => {
  var [isDropdownOpen, dropdownToggle] = useState(false);
  var {user, signout} = props
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <h1>logo</h1>
        </Link>
      </div>

      <div className="shop flex">
        <Link to="/shop">
          <h3>shop</h3>
        </Link>
      </div>

      <div className="cart flex">
        <div onClick={() => dropdownToggle((prevState) => !prevState)}>
          <CartNavItem isDropdownOpen={isDropdownOpen} />
          {isDropdownOpen && <CartDropdown />}
        </div>
      </div>

      {user === null ? (
        <div className="user flex">
          <Link to="/auth">
            <h3>user</h3>
          </Link>
        </div>
      ) : (
        <div  className="user flex">
          <Link to = "/">
            <button onClick = {signout}>Signout</button>
          </Link>
        </div>
      )}
    </div>
  );
};
var mapStateToProps = (state) => ({
  user: state.currentUser.currentUser,
});
var actions = {
signout
}
export default connect(mapStateToProps, actions)(Navbar);
