import { Products } from "./Product";
import "./style/Shop.css";

export function Shop() {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-container">
        <Products name={"test"} Products price={"$3.42"} />
      </div>
    </div>
  );
}
