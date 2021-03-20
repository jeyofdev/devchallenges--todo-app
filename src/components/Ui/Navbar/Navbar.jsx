import React from 'react';
import useResponsiveMenu from '../../../hooks/useResponsiveMenu';
import BurgerButton from '../Buttons/BurgerButton/BurgerButton';
import NavButton from '../Buttons/NavButton/NavButton';
import classes from './Navbar.module.css';

const Navbar = () => {
    const [width, toggleMenu, handleToggleMenu] = useResponsiveMenu();

    return (
        <nav className={classes.navbar}>
            <BurgerButton isShow={toggleMenu} handleIsShow={handleToggleMenu} />

            <ul
                className={`${classes.navbar_nav} ${
                    width < 530 && toggleMenu ? classes.show : ''
                }`}
            >
                <NavButton isActive handleClick={handleToggleMenu}>
                    All
                </NavButton>
                <NavButton isActive={false} handleClick={handleToggleMenu}>
                    Active
                </NavButton>
                <NavButton isActive={false} handleClick={handleToggleMenu}>
                    Completed
                </NavButton>
            </ul>
        </nav>
    );
};

export default Navbar;
