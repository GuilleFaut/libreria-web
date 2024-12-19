import React from 'react';

const BookCard = ({ book, onAddToCart }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => onAddToCart(book)}>Zum Warenkorb hinzufügen</button>
        </div>
    );
};

export default BookCard;
