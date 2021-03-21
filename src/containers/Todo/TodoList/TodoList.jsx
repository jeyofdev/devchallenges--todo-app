import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoContext } from '../../../contexts/TodoContext';
import Todo from '../../../components/Todo/Todo';
import Button from '../../../components/Ui/Buttons/Button/Button';
import classes from './TodoList.module.css';

const TodoList = () => {
    const { filter, todosFiltered, todoCompleted, todoDelete } = useContext(
        TodoContext
    );

    const handleChange = (todo) => {
        todoCompleted(todo);
    };

    const handleDelete = (todo) => {
        todoDelete(todo);
    };

    return (
        <div className="todo-list">
            <div className="todo-items">
                {todosFiltered.length > 0 ? (
                    todosFiltered.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            handleChange={() => handleChange(todo)}
                            handleDelete={() => handleDelete(todo)}
                        />
                    ))
                ) : (
                    <p>no todo available</p>
                )}
            </div>

            {filter === 'completed' && todosFiltered.length > 1 && (
                <div className={classes.btn_group}>
                    <Button
                        type="danger"
                        fontSize="0.75rem"
                        handleClick={() => handleDelete()}
                    >
                        <FaTrash className={classes.icon} />
                        Delete
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TodoList;
