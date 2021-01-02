import React from 'react'
import "./CartDropdown.css"
import CartDropdownItem from '../CartDropdownItem/CartDropdownItem'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CartDropdown = (props) => {
    var {cartItems} = props;
    return (
        <div className = "cart-dropdown-container">
            <div className="cart-dropdown-items">
               {cartItems && cartItems.map((item) => <CartDropdownItem key = {item.id} item = {item}/>)}
            </div>
            <div className="cart-dropdown-btn flex">
                <Link to = "/checkout" style = {{width: "100%"}}>
                <Button backgroundColor = "black" color = "white" fontSize = {18} style = {{width:"100%"}}>Checkout</Button>
                </Link>
            </div>

            
        </div>
    )
}
var mapStateToProps = (state) => ({
    cartItems : state.cart
})
export default connect(mapStateToProps)(CartDropdown)
