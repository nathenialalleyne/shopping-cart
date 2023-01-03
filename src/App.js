import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";

function App() {
  return (
    <div className="whole-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
}

export default App;
