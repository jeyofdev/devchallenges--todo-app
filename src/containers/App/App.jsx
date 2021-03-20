import React from 'react';
import TodoContextProvider from '../../contexts/TodoContext';
import Page from '../Page/Page';
import './App.css';

const App = () => {
    return (
        <TodoContextProvider>
            <div className="App">
                <div className="container">
                    <Page />
                </div>
            </div>
        </TodoContextProvider>
    );
};

export default App;
