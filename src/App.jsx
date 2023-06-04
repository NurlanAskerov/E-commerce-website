import React, { useState } from "react";
import Card from "./components/Card";
import CardContext from "./useContext/CardContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cardItems, setCardItems] = useState([]);
  const [total, setTotal] = useState(0);
  const value = {
    cardItems,
    setCardItems,
    total,
    setTotal,
  };

  return (
    <div className=" overflow-hidden">
      <Router>
        <CardContext.Provider value={value}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </CardContext.Provider>
      </Router>
    </div>
  );
}

export default App;
