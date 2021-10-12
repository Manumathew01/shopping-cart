import React, { useState } from "react";
import "../App.css";

const Cart = ({ className, setIsExpanded }) => {
  return (
    <div className={className}>
      <i onClick={() => setIsExpanded(false)} className="fas fa-times"></i>
      <p>Add items to the cart</p>
      {console.log(className)}
    </div>
  );
};

export default Cart;
