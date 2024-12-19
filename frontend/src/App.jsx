import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import CartPage from "./components/CartPage";
import BookList from "./components/BookList";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookList />}/>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h2>Seite nicht gefunden</h2>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;


