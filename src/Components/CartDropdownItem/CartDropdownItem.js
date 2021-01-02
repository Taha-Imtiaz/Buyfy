import React from "react";
import "./CartDropdownItem.css";
import Paragraph from "../Paragaraph/Paragraph";

const CartDropdownItem = (props) => {
  var {
    item: { name, category, imageUrl, quantity, cost },
  } = props;
  return (
    <div className="cart-dropdown-item-container">
      <div
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "100% 100%, cover",
        }}
        className="cart-dropdown-item-img"
      ></div>
      <div className="cart-dropdown-item-info flex">
        <div>
          <Paragraph fontWeight="bold" fontSize={12}>
            {name}
          </Paragraph>
          <Paragraph fontSize={8}>{category}</Paragraph>
          <Paragraph fontSize={12}>{`${quantity} X ${cost}$`}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default CartDropdownItem;
