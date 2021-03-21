import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({
    submit,
    type,
    color,
    fontSize,
    disabled,
    children,
    handleClick,
}) => {
    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${classes.btn} ${classes[type]} ${classes[color]} ${
                disabled ? classes.disabled : ''
            }`}
            style={{ fontSize }}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    submit: false,
    color: 'light',
    fontSize: '1rem',
    disabled: false,
    handleClick: null,
};

Button.propTypes = {
    submit: PropTypes.bool,
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.any]).isRequired,
    handleClick: PropTypes.func,
};

export default Button;
