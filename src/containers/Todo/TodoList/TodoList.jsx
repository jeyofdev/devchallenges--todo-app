import React, { useContext } from 'react';
import Todo from '../../../components/Todo/Todo';
import { TodoContext } from '../../../contexts/TodoContext';

const TodoList = () => {
    const { todosFiltered, todoCompleted } = useContext(TodoContext);

    const handleChange = (todo) => {
        todoCompleted(todo);
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
