import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../redux/cart/cartCount";
import { CartItem } from "./cartItem";

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
        img={e.img}
      />
    );
  });

  useEffect(() => {
    if (price < 0) {
      dispatch(setPrice(0));
    }
  });
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="price">
        price: {Number(price).toFixed(2)}
        {display}
      </div>
    </div>
  );
}
