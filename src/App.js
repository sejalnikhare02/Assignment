import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./navbar/Header";
import ProductListing from "./Container/ProductListing";
import ProductDetails from "./Container/ProductDetail";
import Home from "./Container/Home";
import About from "./Container/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route> 404 Not Found ..!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
