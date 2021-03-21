import React from 'react';
import Button from '../Ui/Buttons/Button/Button';
import InputText from '../Ui/Form/InputText/InputText';
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form}>
            <div className={classes.form_group}>
                <InputText placeholder="add details" />
            </div>

            <div className={classes.form_group}>
                <Button submit type="primary">
                    Add
                </Button>
            </div>
        </form>
    );
};

export default Form;
