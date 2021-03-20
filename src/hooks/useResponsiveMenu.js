import { useEffect, useState } from 'react';

const useResponsiveMenu = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [toggleMenu, setToggleMenu] = useState(false);

    const changeWidth = () => {
        setWidth(window.innerWidth);
        if (window.innerWidth > 530) {
            setToggleMenu(false);
        }
    };

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);

    return [width, toggleMenu, handleToggleMenu];
};

export default useResponsiveMenu;
