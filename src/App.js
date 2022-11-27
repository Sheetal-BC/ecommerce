import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Item from "./Component/Pages/Item";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Footer/Footer";
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";

import "./App.css";

import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const show = useSelector((state) => state.name.showCart);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product">
          <Item />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      {show && <Cart />}
      <Footer />
    </div>
  );
}

export default App;
