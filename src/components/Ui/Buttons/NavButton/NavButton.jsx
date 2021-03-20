import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavButton.module.css';

const NavButton = ({ children, isActive, handleClick }) => {
    return (
        <li
            className={
                isActive
                    ? `${classes.nav_item} ${classes.active}`
                    : classes.nav_item
            }
        >
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </li>
    );
};

NavButton.propTypes = {
    children: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default NavButton;
