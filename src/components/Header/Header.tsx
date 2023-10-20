import React, { FC } from "react";
import './Header.css';
import { ICity } from "../../types/types";
import geoIcon from '../../images/geo-icon.svg';
import navbarIcon from '../../images/navbar-icon.svg';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

interface HeaderProps {
    openPopupGeo: () => void,
    city: ICity,
    isOpenNavbar: boolean,
    openNavbar: () => void,
    openPopupAuto: () => void,
    onClose: (evt: any) => void
}

const Header: FC<HeaderProps> = ({openPopupGeo, city, isOpenNavbar, openNavbar, openPopupAuto, onClose}) => {
    return(
        <header className="header">
            <div className="header__logo">
                <div className="header__container">
                    <h2 className="header__name">
                        <Link to='/' className="header__name_link">GoodTrip</Link>
                    </h2>
                    <p className="header__description-logo">Поиск прекрасного</p>
                </div>
                <button className="header__geo" onClick={openPopupGeo}>
                    <img src={geoIcon} alt="Иконка геолокации" className="header__geo-icon" />
                    {city.name}
                </button>
            </div>
            <div className="header__auto">
                <button className="header__signin" onClick={openPopupAuto}>Войти</button>
            </div>
            <button className="header__navbar-button" onClick={openNavbar}>
                <img className="header__navbar-icon" src={navbarIcon} alt="Навигация по сайту" />
            </button>
            <Navbar open={isOpenNavbar} openGeo={openPopupGeo} city={city} onClose={onClose} />
        </header>
    );
}

export default Header;