import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions';
import BookItem from './Bookitem'; 

const BookList = () => {
    const books = useSelector(state => {
        console.log('Redux state:', state); 
        return state.books.books || []; 
    });
    const dispatch = useDispatch();

    return (
        <ul>
            {books.map(book => (
                <BookItem key={book.id} book={book} onDelete={() => dispatch(deleteBook(book.id))} />
            ))}
        </ul>
    );
};

export default BookList;
