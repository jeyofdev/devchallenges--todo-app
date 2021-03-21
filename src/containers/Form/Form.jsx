import React, { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Button from '../../components/Ui/Buttons/Button/Button';
import InputText from '../../components/Ui/Form/InputText/InputText';
import classes from './Form.module.css';

const Form = () => {
    const { todoAdd } = useContext(TodoContext);
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        todoAdd(todo);
        setTodo('');
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.form_group}>
                <InputText
                    placeholder="add details"
                    value={todo}
                    handleChange={handleChange}
                />
            </div>

            <div className={classes.form_group}>
                <Button submit type="primary" disabled={todo.length <= 3}>
                    Add
                </Button>
            </div>
        </form>
    );
};

export default Form;
