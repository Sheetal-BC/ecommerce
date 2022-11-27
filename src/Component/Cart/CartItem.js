import React from "react";

import "./CartItem.css";

import { useDispatch } from "react-redux";
import { deletCart } from "../../Store/cartItem";

function CartItem(props) {
  const dispatch = useDispatch();

  const total = Number(props.quantity) * Number(props.price);

  const onRemoveHandler = (id) => {
    dispatch(deletCart(id));
  };

  return (
    <div className="cart-items">
      <div className="cartitems-row">
        <div className="cart-item-first-column">
          <div className="carting">
            <img src={props.img} alt="products" />
          </div>
          <div className="descript">
            <h4>{props.description}</h4>
            <input type="checkbox" />
            <label>Gift wrap this</label>
            <br />
            <button
              className="remove_btn"
              onClick={() => onRemoveHandler(props.id)}
            >
              Remove
            </button>
          </div>
        </div>
        <div>{props.quantity}</div>
        <div>&#8377;{props.price}</div>
        <div>&#8377;{total}</div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
