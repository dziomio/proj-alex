import React from 'react';
import MenuItem from './MenuItem/MenuItem.js';
import Logo from './Logo/Logo.js';

const Header = () => {
    return (
        <header className="header"> 
            <Logo
                title={'Новостник'}
            />
            <div className="header__navigation">
                <nav>
                    <ul className="header__menu">
                        <MenuItem
                            link={'/'}
                            title={'Главная'}
                        />
                        <MenuItem
                            link={'/news'}
                            title={'Новости'}
                        />
                        <MenuItem
                            link={'/contacts'}
                            title={'Контакты'}
                        />                      
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
