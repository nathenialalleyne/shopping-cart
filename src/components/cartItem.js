import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, change } from "../redux/cart/cartCount";

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
            dispatch(change(name));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
