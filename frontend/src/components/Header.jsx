import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext); // We get the items from the cart
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Calculate the total number of items in the cart

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Mein Bücherladen</h1>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/book" className="nav-item">Bücher</Link>
        <Link to="/search" className="nav-item">Suche</Link>
        <Link to="/cart" className="nav-item">
          Warenkorb ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
