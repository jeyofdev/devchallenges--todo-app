import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useState([]);

    const filterUpdate = (value) => {
        setFilter(value);
    };

    const todoAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <TodoContext.Provider value={{ filter, filterUpdate, todos, todoAdd }}>
            {children}
        </TodoContext.Provider>
    );
};

TodoContextProvider.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default TodoContextProvider;
