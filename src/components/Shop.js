import { Products } from "./Product";
import "./style/Shop.css";

export function Shop(props) {
  const cart = props.products;
  return (
    <div>
      <h1>Products</h1>
      <div className="product-container">
        <Products name={"test"} products={cart} price={3.42} />
        <Products name={"test2"} products={cart} price={362.42} />
      </div>
    </div>
  );
}
