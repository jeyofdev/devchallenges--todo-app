import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ submit, type, disabled, children, handleClick }) => {
    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${classes.btn} ${classes[type]} ${
                disabled ? classes.disabled : ''
            }`}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    handleClick: null,
};

Button.propTypes = {
    submit: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        .isRequired,
    handleClick: PropTypes.func,
};

export default Button;
