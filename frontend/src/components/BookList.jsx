import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import './Books.css'; 

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart(); // We use the context of the cart

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error in obtaining the books:', error));
  }, []);

  return (
    <div className="booklist-container">
      <h2>Bücherliste</h2>
      {books.length === 0 ? (
        <p>Es sind keine Bücher vorhanden.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.isbn} className="book-card">
              <img
                src={`http://localhost:5000/images/${book.image_name}`}
                alt={book.title}
                className="book-image"
              />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Autor: {book.author}</p>
              <p className="book-seiten">{book.pages} Seiten</p>
              <p className="book-category">Kategorie: {book.category}</p>
              <p className="book-price">Preis: € {book.price}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(book)}>Zum Warenkorb hinzufügen</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
