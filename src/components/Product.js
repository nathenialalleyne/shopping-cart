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
  const productImg = props.img;
  return (
    <div className="product-grid">
      <img className="shop-img" src={productImg}></img>
      <div className="bottom-container">
        <div className="text-container">
          <h3 className="product-name">{productName}</h3>
          <div>${productPrice}</div>
        </div>
        <div className="button-div">
          <button
            className="add-cart"
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
                    productImg,
                  })
                );
                dispatch(increment());
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
