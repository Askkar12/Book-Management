import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: Date.now(),
            title,
            author,
        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book Title"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
