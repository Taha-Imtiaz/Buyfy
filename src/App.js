import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import Auth from "./Pages/Auth/Auth";
import Checkout from "./Pages/Checkout/Checkout";
import Profile from "./Pages/Profile/Profile";
import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import { auth, firestore } from "./Firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser, removeCurrentUser } from "./Redux/user/userActions";

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          var { uid } = user;

          if (uid) {
            var userSnap = await firestore.collection("users").doc(uid).get();

            if (userSnap.exists) {
              var userData = userSnap.data();

              var userObj = {
                fullName: userData.fullName,
                email: userData.email,
                uid: uid,
              };
              props.setCurrentUser(userObj);
            }
          }
        } else {
          // console.log("else")
          props.removeCurrentUser();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  return (
    <div className="app-container">
      <div>
        <Navbar />
      </div>

      <div>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/shop" component={Shop} exact></Route>
          <Route
            path="/shop/category/:categoryName"
            component={Category}
            exact
          ></Route>
          <Route
            path="/shop/category/:categoryName/product/:productId"
            component={Product}
          ></Route>
          <Route path="/auth" component={Auth}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/manageprofile" component={Profile}></Route>
          {/* A test component is for understanding hooks concepts */}
          <Route path="/test" component={Test}></Route>
        </Switch>
      </div>
    </div>
  );
}
var actions = {
  setCurrentUser,
  removeCurrentUser,
};
export default connect(null, actions)(App);
