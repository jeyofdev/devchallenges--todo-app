import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from '../Ui/Form/InputCheckbox/InputCheckbox';
import classes from './Todo.module.css';

const Todo = ({ todo }) => {
    return (
        <div className={classes.form_group}>
            <InputCheckbox id={`checkbox-${todo.id}`}>
                {todo.name}
            </InputCheckbox>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.string.isRequired,
};

export default Todo;
