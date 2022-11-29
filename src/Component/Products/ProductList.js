import React, { useState } from "react";
import Card from "../Card/Card";

import "./ProductList.css";

import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../../Store/cartItem";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductList(props) {
  const dispatch = useDispatch();

  const [showAddToCart, setShowAddToCart] = useState(true);
  const [count, setCount] = useState(0);

  const onShowHandler = () => {
    setShowAddToCart(false);
    setCount(count + 1);
    toast.success("Product added to the cart");

    dispatch(
      addCart({
        id: props.id,
        title: props.title,
        imgsrc: props.img,
        price: props.price,
        quantity: props.quantity,
        description: props.description,
      })
    );
  };
  const RemoveHandler = (id) => {
    setCount(count - 1);
    if (count <= 1) {
      setShowAddToCart(true);
    }
    dispatch(removeCart(id));
  };

  const addToCartHandler = () => {
    setCount(count + 1);
    toast.success("Product added to the cart");

    dispatch(
      addCart({
        id: props.id,
        title: props.title,
        imgsrc: props.img,
        price: props.price,
        quantity: props.quantity,
        description: props.description,
      })
    );
  };

  return (
    <div className="content">
      <Card>
        <img className="product_img" src={props.img} alt="product" />
        <div className="align_cont">
          <h1 className="product_title">{props.title}</h1>
          <h1 className="product_price"> &#8377;{props.price}</h1>
        </div>

        <p className="product_dec">{props.description}</p>
        {showAddToCart && (
          <div>
            <button className="addCart_btn" onClick={onShowHandler}>
              Add To Cart
            </button>
          </div>
        )}

        {!showAddToCart && (
          <div className="addRemove_btn">
            <button
              disabled={count < 1 ? true : false}
              onClick={() => RemoveHandler(props.id)}
            >
              -
            </button>
            <input
              type="number"
              value={count}
              onChange={(e) => e.target.value}
            />
            <button onClick={addToCartHandler}>+</button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default ProductList;
