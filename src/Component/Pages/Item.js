import React from "react";
import Product from "../Products/Product";

import "./Item.css";

function Item() {
  return (
    <div>
      <div className="genric">
        <span className="cont">
          “Ayurveda teaches us to cherish our innate-nature – “to love <br />
          and honor who we are”, not as what people think or
          <br /> tell us, “who we should be.”
        </span>
      </div>
      <Product />
    </div>
  );
}

export default Item;
