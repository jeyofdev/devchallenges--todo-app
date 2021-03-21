import React, { useContext } from 'react';
import Todo from '../../../components/Todo/Todo';
import { TodoContext } from '../../../contexts/TodoContext';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return (
        <div className="todo-list">
            <div className="todo-items">
                {todos.length > 0 ? (
                    todos.map((todo) => <Todo todo={todo} />)
                ) : (
                    <p>no todo available</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
