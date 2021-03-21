import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useState([]);
    const [todosFiltered, setTodosFiltered] = useState([]);

    const filterUpdate = (value) => {
        setFilter(value);
    };

    const todoAdd = (name) => {
        setTodos([...todos, { id: uuid(), name, completed: false }]);
    };

    const todoCompleted = (todoToUpdate) => {
        const todosUpdated = todos.map((todo) =>
            todo.id === todoToUpdate.id
                ? { ...todo, completed: !todo.completed }
                : todo
        );

        setTodos(todosUpdated);
    };

    const todoDelete = (value) => {
        setTodos(todos.filter((todo) => todo.id !== value.id));
    };

    useEffect(() => {
        if (filter === 'active') {
            setTodosFiltered(todos.filter((todo) => !todo.completed));
        } else if (filter === 'completed') {
            setTodosFiltered(todos.filter((todo) => todo.completed));
        } else {
            setTodosFiltered(todos);
        }
    }, [filter, todos]);

    return (
        <TodoContext.Provider
            value={{
                filter,
                filterUpdate,
                todos,
                todoAdd,
                todoCompleted,
                todoDelete,
                todosFiltered,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

TodoContextProvider.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default TodoContextProvider;
