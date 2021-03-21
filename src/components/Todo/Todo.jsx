import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from '../Ui/Form/InputCheckbox/InputCheckbox';
import classes from './Todo.module.css';

const Todo = ({ todo, handleChange }) => {
    return (
        <div className={classes.form_group}>
            <InputCheckbox
                id={`checkbox-${todo.id}`}
                completed={todo.completed}
                handleChange={() => handleChange(todo)}
            >
                {todo.name}
            </InputCheckbox>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape().isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Todo;
