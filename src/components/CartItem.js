
import React from "react";

const CartItem=(props)=>{
  return(
    <div className="cart-item">
    <p className="cart-item__title">{props.title}</p>
    <p className="cart-item__price">{props.price}.00$</p>
  </div>
  )
}

export default CartItem;