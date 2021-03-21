import React from 'react';
import PropTypes from 'prop-types';
import classes from './InputCheckbox.module.css';

const InputCheckbox = ({ id, completed, children, handleChange }) => {
    return (
        <>
            <input
                type="checkbox"
                className={classes.form_control_checkbox}
                id={id}
                checked={completed}
                onChange={handleChange}
            />
            <label
                className={`${classes.checkbox_label} ${
                    completed ? classes.completed : ''
                }`}
                htmlFor={id}
            >
                {children}
            </label>
        </>
    );
};

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default InputCheckbox;
