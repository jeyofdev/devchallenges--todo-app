import React from 'react';
import PropTypes from 'prop-types';
import classes from './InputCheckbox.module.css';

const InputCheckbox = ({ id, children }) => {
    return (
        <>
            <input
                type="checkbox"
                className={classes.form_control_checkbox}
                id={id}
            />
            <label className={classes.checkbox_label} htmlFor={id}>
                {children}
            </label>
        </>
    );
};

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default InputCheckbox;
