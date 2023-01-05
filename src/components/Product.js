import "./style/Product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  increase,
  addItem,
} from "../redux/cart/cartCount";
import { useEffect, useState } from "react";
// import { increase } from "../redux/cart/priceChange";

export function Products(props) {
  const { items } = useSelector((state) => state.counter);
  const { count } = useSelector((state) => state.counter);
  // const { price } = useSelector((state) => state.price);

  const dispatch = useDispatch();

  const productName = props.name;
  const productPrice = props.price;
  return (
    <div className="product-grid">
      <div>{productName}</div>
      <div>${productPrice}</div>
      <div className="button-div">
        <button
          onClick={() => {
            let found = false;
            items.forEach((element) => {
              if (element.productName == productName) {
                found = true;
              }
            });
            if (found == false) {
              dispatch(
                addItem({
                  productName,
                  productPrice,
                  productQuantity: 0,
                })
              );
              dispatch(increment());
            }
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
