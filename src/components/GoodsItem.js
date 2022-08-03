import React from "react";
import { ADDTOCARD } from "../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import "../styles.css";
const GoodsItem=(props)=>{
const state=useSelector((state)=>state.add);
const dispatch=useDispatch();
  console.log(state);
  return (
    <div className="goods-item" key={props.id}>
    <h3 className="goods-item__title">{props.title}</h3>
    <p className="goods-item__price">
      <span className="goods-item__price-value goods-item__price-value_old">{props.price*1.2}.00$ </span>
      <span className="goods-item__price-value goods-item__price-value_new">{props.price}.00$</span>
    </p>
    <p className="goods-item__description">{props.description}</p>
    <button onClick={()=>{dispatch({type:ADDTOCARD, payload:{
      title:props.title,
      price:props.price

    }})}} className="goods-item__add-to-card">Add to cart</button>
  </div>
  )
}
export default GoodsItem;