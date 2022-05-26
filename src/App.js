import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/pic_me" element={<Home />} />
        <Route path="/info" element={<About />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
