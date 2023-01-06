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
  const img = props.img;
  const [newQuant, setNewQuant] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewQuant(quantity);
  }, []);

  return (
    <div className="cart-item">
      <img className="product-img" src={img}></img>
      <div className="product-bottom">
        <div>
          <h3>{name}</h3>
          <h3>Price: {itemPrice}</h3>
        </div>
        Quantity:{newQuant}
        <div>
          {" "}
          <div className="add-sub-button">
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
          </div>
          <button
            className="remove-button"
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
    </div>
  );
}
