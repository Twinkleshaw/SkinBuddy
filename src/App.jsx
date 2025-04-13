/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
