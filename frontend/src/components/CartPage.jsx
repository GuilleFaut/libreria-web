import React from "react";
import { useCart } from "../context/CartContext";
import './Books.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="booklist-container">
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Der Warenkorb ist leer.</p>
      ) : (
        <div className="book-grid">
          {cartItems.map((item) => (
              <div key={item.isbn} className="book-card">
                <h3 className="book-title">{item.title}</h3>
                <p className="book-author">Autor: {item.author}</p>
                <p className="book-category">Kategorie: {item.category}</p>
                <p className="book-amount">Menge: {item.quantity}</p>
                <button className="remove-to-cart-button" onClick={() => removeFromCart(item.isbn)}>Löschen</button>
              </div>
            ))}          
          
        </div>
        
      )}
      <button className="remove-to-cart-button" onClick={clearCart}>Leerer Warenkorb</button>
    </div>
  );
};

export default CartPage;
/*
<div>
      <h2>Warenkorb</h2>
      {cartItems.length === 0 ? (
        <p>Der Warenkorb ist leer.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.isbn}> 
                <h4>{item.title}</h4>
                <p>Autor: {item.author}</p>
                <p>Kategorie: {item.category}</p>
                <p>Menge: {item.quantity}</p>
                <button className="remove-to-cart-button" onClick={() => removeFromCart(item.isbn)}>Löschen</button>
              </li>
            ))}
          </ul>
          <button className="remove-to-cart-button" onClick={clearCart}>Leerer Warenkorb</button>
        </div>
      )}
    </div>
*/




