
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux/es/exports';
import React from 'react'
const Cart = () => {
const state=useSelector((state)=>state.add);

  const getTotal=()=>{
    return state.reduce((acc, item)=>acc+item.price, 0);
  }
  return (
    <div className="cart">
    <h2 className="cart__title" >Shopping Cart</h2>
    { state.length ?
      <ul className="cart__list">
        {state.map((item, index) => (
          <li className="cart__list-item" key={index}>
            <CartItem {...item} />
          </li>
        ))}
      </ul>
    :
      <p className="cart__note">Nothing in the cart now</p>
    }

    <p className="cart__total">Total: {getTotal()}.00$</p>
  </div>
  )
}

export default Cart