import { Products } from "./Product";
import "./style/Shop.css";

export function Shop(props) {
  const cart = props.products;
  return (
    <div className="shop-container">
      <h1>Products</h1>
      <div className="product-container">
        <Products
          img={require("../assets/bag.jpg")}
          name={"Bag"}
          products={cart}
          price={3169.53}
        />
        <Products
          img={require("../assets/beanie.jpg")}
          name={"Beanie"}
          products={cart}
          price={362.42}
        />
        <Products
          img={require("../assets/bottle.jpg")}
          name={"Bottle"}
          products={cart}
          price={373.77}
        />
        <Products
          img={require("../assets/fire-hydrant.jpg")}
          name={"Fire Hydrant"}
          products={cart}
          price={9788.6}
        />
        <Products
          img={require("../assets/mango.jpg")}
          name={"Mango"}
          products={cart}
          price={7940.9}
        />
        <Products
          img={require("../assets/map.jpg")}
          name={"Map"}
          products={cart}
          price={5671.29}
        />
        <Products
          img={require("../assets/mop.jpg")}
          name={"Mop"}
          products={cart}
          price={5179.08}
        />
        <Products
          img={require("../assets/pencil.jpg")}
          name={"Pencil"}
          products={cart}
          price={8944.65}
        />
        <Products
          img={require("../assets/usb-drive.jpg")}
          name={"USB"}
          products={cart}
          price={2984.39}
        />
        <Products
          img={require("../assets/white-out.jpg")}
          name={"White"}
          products={cart}
          price={1481.24}
        />
      </div>
    </div>
  );
}
