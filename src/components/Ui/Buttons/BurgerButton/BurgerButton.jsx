import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerButton.module.css';

const BurgerButton = ({ isShow, handleIsShow }) => {
    return (
        <button
            type="button"
            className={`${classes.btn_burger} ${
                isShow ? classes.is_active : ''
            }`}
            onClick={handleIsShow}
        >
            <span className={classes.line} />
            <span className={classes.line} />
            <span className={classes.line} />
        </button>
    );
};

BurgerButton.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleIsShow: PropTypes.func.isRequired,
};

export default BurgerButton;
