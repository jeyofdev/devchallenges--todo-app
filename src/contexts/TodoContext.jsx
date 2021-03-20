import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('all');

    const filterUpdate = (value) => {
        setFilter(value);
    };

    return (
        <TodoContext.Provider value={{ filter, filterUpdate }}>
            {children}
        </TodoContext.Provider>
    );
};

TodoContextProvider.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default TodoContextProvider;
