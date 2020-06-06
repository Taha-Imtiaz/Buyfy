import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Category from './Pages/Category/Category';
import Product from './Pages/Product/Product';
import Auth from './Pages/Auth/Auth';
import Checkout from './Pages/Checkout/Checkout';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div>
      <Switch>
        <Route path = "/" component = {Home} exact></Route>
        <Route path = "/shop" component = {Shop} exact></Route>
        <Route path = "/shop/category/:categoryName" component = {Category} exact></Route>
        <Route path = "/shop/category/:categoryName/product/:productId" component = {Product}></Route>
        <Route path = "/auth" component = {Auth}></Route>
        <Route path = "/checkout" component = {Checkout}></Route>
        <Route path = "/manageprofile" component = {Profile}></Route>
      </Switch>
    
    </div>
  );
}

export default App;
