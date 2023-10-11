import React, { FC } from "react";
import './Header.css';
import { ICity } from "../../types/types";
import geoIcon from '../../images/geo-icon.svg';

interface HeaderProps {
    openPopupGeo: () => void,
    city: ICity
}

const Header: FC<HeaderProps> = ({openPopupGeo, city}) => {
    return(
        <header className="header">
            <div className="header__logo">
                <div className="header__container">
                    <h2 className="header__name">GoodTrip</h2>
                    <p className="header__description-logo">Поиск прекрасного</p>
                </div>
                <button className="header__geo" onClick={openPopupGeo}>
                    <img src={geoIcon} alt="Иконка геолокации" className="header__geo-icon" />
                    {city.name}
                </button>
            </div>
            <div className="header__auto">
                <button className="header__signin">Войти</button>
            </div>
        </header>
    );
}

export default Header;