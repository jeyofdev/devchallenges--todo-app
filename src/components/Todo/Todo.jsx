import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { TodoContext } from '../../contexts/TodoContext';
import InputCheckbox from '../Ui/Form/InputCheckbox/InputCheckbox';
import classes from './Todo.module.css';
import Button from '../Ui/Buttons/Button/Button';

const Todo = ({ todo, handleChange, handleDelete }) => {
    const { filter } = useContext(TodoContext);

    return (
        <div className={classes.form_group}>
            <InputCheckbox
                id={`checkbox-${todo.id}`}
                completed={todo.completed}
                handleChange={() => handleChange(todo)}
            >
                {todo.name}
            </InputCheckbox>

            {filter === 'completed' && (
                <Button type="icon" handleClick={handleDelete}>
                    <FaTrash className={classes.icon} />
                </Button>
            )}
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape().isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default Todo;
