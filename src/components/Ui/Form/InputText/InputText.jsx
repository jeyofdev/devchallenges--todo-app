import React from 'react';
import PropTypes from 'prop-types';
import classes from './InputText.module.css';

const InputText = ({ placeholder }) => {
    return (
        <input
            type="text"
            className={classes.form_control_text}
            placeholder={placeholder}
        />
    );
};

InputText.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default InputText;
