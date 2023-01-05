import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";

function App() {
  let products = [];

  return (
    <div className="whole-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop products={products} />}></Route>
        <Route path="/cart" element={<Cart products={products} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
