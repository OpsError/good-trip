import React, { FC } from "react";
import './Place.css';
import iconLikeDisable from '../../images/icon-like-disable.svg';
import iconLikeActive from '../../images/icon-like-active.svg';
import { useNavigate } from "react-router-dom";
import { IPlaces } from "../../types/types";

interface PlaceProps {
    city: IPlaces,
    openInfo: (element: IPlaces) => void
}

const Place: FC<PlaceProps> = ({city, openInfo}) => {
    const [isActiveLike, setIsActiveLike] = React.useState<boolean>(false);
    const navigation = useNavigate();

    const toggleLike = () => {
        setIsActiveLike(isActiveLike => !isActiveLike);
    }

    const handleClick = () => {
        navigation(`/${city.id}`);
        openInfo(city);
    }

    return(
        <div className="places__container">
            <img className="places__image" src={city.link} alt={city.name} />
            <div className="places__info">
                <h2 className="places__name" onClick={handleClick}>{city.name}</h2>
                <p className="places__address">{city.address}</p>
                <p className="places__time">Время работы: 10:00 - 18:00</p>
            </div>
            <button className="places__fave" onClick={toggleLike}>
                <img className="places__like-icon" alt="Добавить в избранные" src={isActiveLike? iconLikeActive : iconLikeDisable} />
            </button>
        </div>
    );
}

export default Place;