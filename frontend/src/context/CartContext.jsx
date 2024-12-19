import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    

    const addToCart = (book) => {
        setCartItems((prevCart) => {
          const existingBook = prevCart.find((item) => item.isbn === book.isbn);
      
          if (existingBook) {
            // If the book is already in the cart, we increase the quantity.
            return prevCart.map((item) =>
              item.isbn === book.isbn
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            // If it is not in the cart, we add it with quantity 1
            return [...prevCart, { ...book, quantity: 1 }];
          }
        });
      };
      

      const removeFromCart = (isbn) => {
        setCartItems((prevCart) =>
          prevCart
            .map((item) =>
              item.isbn === isbn
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0) // Eliminate books with quantity 0
        );
      };
      
      

    const clearCart = () => {
        setCartItems([]);
      };

      return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
          {children}
        </CartContext.Provider>
      );
};
