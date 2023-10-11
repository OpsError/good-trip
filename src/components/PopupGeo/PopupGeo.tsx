import React, { FC } from "react";
import './PopupGeo.css';
import Popup from "../Popup/Popup";
import { ICity } from "../../types/types";
import { listCityFirstHalf, listCitySecondHalf } from "../../utils/ListCity";

interface PopupGeoProps {
    open: boolean,
    openPopup: () => void,
    changeCity: (city: ICity) => void
}

const PopupGeo: FC<PopupGeoProps> = ({open, openPopup, changeCity}) => {
    const handleClickCity = (e: any) => {
        changeCity({
            key: e.target.value,
            name: e.target.textContent
        });
    }

    return(
        <Popup open={open} openPopup={openPopup}>
            <div className="popup-geo__container">
                <h2 className="popup-geo__header">Выберите город:</h2>
                <div className="popup-geo__city-list">
                    <ul className="popup-geo__list-half">
                        {listCityFirstHalf.map(element => <li key={element.key} value={element.key} onClick={handleClickCity} className="popup-geo__city">{element.name}</li>)}
                    </ul>
                    <ul className="popup-geo__list-half">
                        {listCitySecondHalf.map(element => <li key={element.key} value={element.key} onClick={handleClickCity} className="popup-geo__city">{element.name}</li>)}
                    </ul>
                </div>
            </div>
        </Popup>
    );
}

export default PopupGeo;