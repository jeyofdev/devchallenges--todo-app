import React, { useContext } from 'react';
import useResponsiveMenu from '../../hooks/useResponsiveMenu';
import { TodoContext } from '../../contexts/TodoContext';
import BurgerButton from '../../components/Ui/Buttons/BurgerButton/BurgerButton';
import NavButton from '../../components/Ui/Buttons/NavButton/NavButton';
import classes from './Navbar.module.css';

const Navbar = () => {
    const { filter, filterUpdate } = useContext(TodoContext);
    const [width, toggleMenu, handleToggleMenu] = useResponsiveMenu();

    const handleClick = (value) => {
        handleToggleMenu();
        filterUpdate(value);
    };

    return (
        <nav className={classes.navbar}>
            <BurgerButton isShow={toggleMenu} handleIsShow={handleToggleMenu} />

            <ul
                className={`${classes.navbar_nav} ${
                    width < 530 && toggleMenu ? classes.show : ''
                }`}
            >
                <NavButton
                    isActive={filter === 'all'}
                    handleClick={() => handleClick('all')}
                >
                    All
                </NavButton>
                <NavButton
                    isActive={filter === 'active'}
                    handleClick={() => handleClick('active')}
                >
                    Active
                </NavButton>
                <NavButton
                    isActive={filter === 'completed'}
                    handleClick={() => handleClick('completed')}
                >
                    Completed
                </NavButton>
            </ul>
        </nav>
    );
};

export default Navbar;
