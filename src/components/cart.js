import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../redux/cart/cartCount";
import { CartItem } from "./cartItem";
import "./style/Cart.css";

export function Cart() {
  const { items } = useSelector((state) => state.counter);
  const { price } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const display = [];
  items.map((e) => {
    display.push(
      <CartItem
        name={e.productName}
        price={e.productPrice}
        quant={e.productQuantity}
        key={items.indexOf(e)}
        img={e.productImg}
      />
    );
  });

  useEffect(() => {
    if (price < 0) {
      dispatch(setPrice(0));
    }
  });

  const dis = () => {
    if (display.length == 0) {
      return (
        <h2 className="add-item">Add an Item to Your Cart to Checkout!</h2>
      );
    } else {
      return display;
    }
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="items">{dis()}</div>
      <p className="total">Total: {Number(price).toFixed(2)}</p>
    </div>
  );
}
