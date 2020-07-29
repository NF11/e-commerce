import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;
