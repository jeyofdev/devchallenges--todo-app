import React from 'react';
import PropTypes from 'prop-types';
import classes from './InputText.module.css';

const InputText = ({ placeholder, value, handleChange }) => {
    return (
        <input
            type="text"
            className={classes.form_control_text}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

InputText.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default InputText;
