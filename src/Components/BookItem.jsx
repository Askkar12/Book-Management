import React from 'react';

const BookItem = ({ book, onDelete }) => {
    return (
        <li>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default BookItem;
