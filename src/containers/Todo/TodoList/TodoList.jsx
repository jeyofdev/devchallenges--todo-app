import React, { useContext } from 'react';
import Todo from '../../../components/Todo/Todo';
import { TodoContext } from '../../../contexts/TodoContext';

const TodoList = () => {
    const { todos, todoCompleted } = useContext(TodoContext);

    const handleChange = (todo) => {
        todoCompleted(todo);
    };

    return (
        <div className="todo-list">
            <div className="todo-items">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            handleChange={() => handleChange(todo)}
                        />
                    ))
                ) : (
                    <p>no todo available</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
