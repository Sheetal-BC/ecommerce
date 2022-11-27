import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";
import { displayCart } from "../../Store/cartItem";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const newCart = useSelector((item) => item.name.cart);
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(displayCart());
  };

  let total = 0;
  newCart.forEach((element) => {
    total = total + Number(element.quantity);
  });

  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="logo">LOGO</h1>
        <ul className="list">
          <Link to="/home">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
        </ul>

        <button className="cart_btn" onClick={openCartHandler}>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <span className="badge">{total}</span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
