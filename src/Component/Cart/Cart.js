import React from "react";
import CartItem from "./CartItem";

import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { hiddenCart } from "../../Store/cartItem";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Cart() {
  const newCart = useSelector((item) => item.name.cart);

  const dispatch = useDispatch();
  const history = useHistory();

  const closeHandler = () => {
    dispatch(hiddenCart());
  };

  const handleShopingBtn = () => {
    dispatch(hiddenCart());
    history.replace("/product");
  };

  let total = 0;
  newCart.forEach((element) => {
    total += Number(element.quantity) * Number(element.price);
    return total;
  });
  if (newCart === undefined) console.log("empty");

  const CartList = newCart.map((item, index) => (
    <CartItem
      key={item.id + "_" + item.id + index}
      id={item.id}
      item={item.title}
      img={item.imgsrc}
      price={item.price}
      quantity={item.quantity}
      description={item.description}
    />
  ));

  return (
    <div className="cart">
      <header className="cart_header">
        <div className="title">Cart</div>
        <button className="close_btn" onClick={closeHandler}>
          x
        </button>
      </header>
      <hr />
      <div className="second_header">
        <div className="first">LOGO</div>
        <div className="second">
          <div className="column">
            1 <br />
            <span>Bag</span>
          </div>
          <br />
          <div className="line" style={{ width: "50%" }}>
            <span></span>
          </div>
          <div className="column">
            2<br/><span>Delivery</span>
          </div>
          <div className="line" style={{ width: "50%" }}></div>
          <div className="column">3<br/><span>Pay</span></div>
        </div>
        <div className="third">
          <div>
            {" "}
            <input type="checkbox" />
            <br />
            <label>
              Secure <br />
              payments
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <br />
            <label>
              Free 30 day
              <br /> delivery
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <br />
            <label>
              100% buyer
              <br /> protection
            </label>
          </div>
        </div>
      </div>

      <div className="cart-row cart-header">
        <div className="cart-item cart-column">ITEM</div>
        <div className="cart-price cart-column">QUANTITY</div>
        <div className="cart-quantity cart-column">PRICE</div>
        <div className="cart-subtotal cart-column">SUBTOTAL</div>
      </div>
      <hr />
      {CartList}

      <div className="summary">
        <div className="coupan">
          <label>Coupon: </label>
          <input placeholder="Coupon code" />
        </div>
        <div className="summary_table">
          <div className="summary_row">
            <p>Bag Total: </p>
            <p>&#8377;{total}</p>
          </div>
          <div className="summary_row">
            <p>Bag Discount:</p>
            <p> &#8377;0</p>
          </div>
          <div className="summary_row">
            <p>VAT: </p>
            <p>&#8377;0</p>
          </div>
          <div className="summary_row">
            <p>Delivery: </p>
            <p>&#8377;0</p>
          </div>
          <div className="summary_row">
            <p>
              <strong>Order Total:</strong>
            </p>
            <p>
              <strong>&#8377;{total}</strong>
            </p>
          </div>

          <button className="btn" onClick={handleShopingBtn}>
            Continue shoping
          </button>
          <button className="btn" onClick={() => toast.success("Successful")}>
            Pay securely now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
