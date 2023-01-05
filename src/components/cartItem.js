import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  increase,
  addQuant,
  remQuant,
  decrease,
  remItem,
  decrement,
} from "../redux/cart/cartCount";

export function CartItem(props) {
  const name = props.name;
  const itemPrice = props.price;
  let quantity = props.quant;
  const [newQuant, setNewQuant] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewQuant(quantity);
  }, []);

  return (
    <div className="cart-item">
      quantity:{newQuant}
      <div>
        {" "}
        <button
          onClick={() => {
            setNewQuant(quantity + 1);
            dispatch(increase(itemPrice));
            dispatch(addQuant(name));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (quantity > 0) {
              setNewQuant(quantity - 1);
              dispatch(decrease(itemPrice));
              dispatch(remQuant(name));
            }
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(decrease(itemPrice * quantity));
            dispatch(remItem(name));
            dispatch(decrement());
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
