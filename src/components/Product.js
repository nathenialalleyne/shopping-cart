import "./style/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/cart/cartCount";
import store from "../redux/store";

export function Products(props) {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const productName = props.name;
  const productPrice = props.price;
  return (
    <div className="product-grid">
      <div>{productName}</div>
      <div>{productPrice}</div>
      <div className="button-div">
        <button onClick={() => dispatch(increment())}>increase</button>
        <button onClick={() => dispatch(decrement())}>decrease</button>
        <div>quant: {count}</div>
      </div>
    </div>
  );
}
