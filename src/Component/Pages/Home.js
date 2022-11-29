import React from "react";
import "./Home.css";

import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div>
      <div className="home">
        <button
          className="shop_btn"
          onClick={() => history.replace("/product")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
