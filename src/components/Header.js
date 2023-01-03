import { NavLink } from "react-router-dom";
import "./style/Header.css";
import { useSelector } from "react-redux";

export function Header() {
  const { count } = useSelector((state) => state.counter);
  return (
    <header>
      <div className="header-size">
        <ul className="header-links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Products</NavLink>
          <NavLink className="cart-nav" to={"/Cart"}>
            Cart
            <div className="cart-indicator">{count}</div>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
