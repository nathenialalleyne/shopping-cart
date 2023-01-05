import { useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./cartItem";

export function Cart() {
  const { items } = useSelector((state) => state.counter);
  const { price } = useSelector((state) => state.counter);

  const display = [];
  items.map((e) => {
    display.push(
      <CartItem
        name={e.productName}
        price={e.productPrice}
        quant={e.productQuantity}
        key={items.indexOf(e)}
      />
    );
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
