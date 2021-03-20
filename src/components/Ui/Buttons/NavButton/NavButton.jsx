import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavButton.module.css';

const NavButton = ({ children, isActive }) => {
    return (
        <li
            className={
                isActive
                    ? `${classes.nav_item} ${classes.active}`
                    : classes.nav_item
            }
        >
            <button type="button">{children}</button>
        </li>
    );
};

NavButton.propTypes = {
    children: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default NavButton;
