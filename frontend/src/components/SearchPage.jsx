import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import { CartContext } from '../context/CartContext';
import './Books.css';


const SearchPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (book) => {
    addToCart(book); // Call addToCart when the book is added
    };
  
    const handleSearch = async (query) => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/books?q=${query}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="booklist-container">
        <h2>Bücher suchen</h2>
        <SearchBar onSearch={handleSearch} />
        {loading && <p>Lädt Bücher...</p>}
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.isbn} className="book-card">
              <img
                src={`http://localhost:5000/images/${book.image_name}`} // Build the image path
                alt={book.title}
                className="book-image"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Autor: {book.author}</p>
              <p className="book-category">Kategorie: {book.category}</p>
              <p className="book-price">Preis: ${book.price}</p>
              <button 
              className="add-to-cart-button" onClick={() => handleAddToCart(book)}>Zum Warenkorb hinzufügen</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SearchPage;