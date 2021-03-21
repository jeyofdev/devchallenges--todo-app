import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ submit, type, disabled, children }) => {
    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${classes.btn} ${classes[type]} ${
                disabled ? classes.disabled : ''
            }`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    submit: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
};

export default Button;
