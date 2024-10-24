import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookForm from './Components/Bookform';
import BookList from './Components/Booklist';


const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Book Management System</h1>
                <BookForm/>
                <BookList/>
            </div>
        </Provider>
    );
};

export default App;
