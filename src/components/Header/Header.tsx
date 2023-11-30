import React, { FC } from "react";
import './Header.css';
import locationLogo from '../../images/geo-icon.svg';
import navbarIcon from '../../images/navbar-icon.svg';
import { ICity } from '../../types/types';

interface HeaderProps {
    city: ICity,
}

const Header: FC<HeaderProps> = ({ city }) => {
    console.log(city);
    return(
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Good Trip</h1>

                <div className="header__location-container">
                    <img className="header__location-logo" src={locationLogo} alt="Местоположение" />
                    <p className="header__location-name">{city.name}</p>
                </div>
            </div>
            <p className="header__sign">Войти</p>
            <img className="header__navbar" src={navbarIcon} alt="Меню" />
        </header>
    );
}

export default Header;