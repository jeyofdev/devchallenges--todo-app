import React from 'react';
import NavButton from '../Buttons/NavButton/NavButton';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar_nav}>
                <NavButton isActive>All</NavButton>
                <NavButton isActive={false}>Active</NavButton>
                <NavButton isActive={false}>Completed</NavButton>
            </ul>
        </nav>
    );
};

export default Navbar;
