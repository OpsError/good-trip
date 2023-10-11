import React, { FC } from "react";
import './Place.css';
import iconLikeDisable from '../../images/icon-like-disable.svg';
import iconLikeActive from '../../images/icon-like-active.svg';

interface PlaceProps {
    name: string,
    link: string,
    address: string
}

const Place: FC<PlaceProps> = ({name, link, address}) => {
    const [isActiveLike, setIsActiveLike] = React.useState<boolean>(false);

    const toggleLike = () => {
        setIsActiveLike(isActiveLike => !isActiveLike);
    }

    return(
        <div className="places__container">
            <img className="places__image" src={link} alt={name} />
            <div className="places__info">
                <h2 className="places__name">{name}</h2>
                <p className="places__address">{address}</p>
                <p className="places__time">Время работы: 10:00 - 18:00</p>
            </div>
            <button className="places__fave" onClick={toggleLike}>
                <img className="places__like-icon" alt="Добавить в избранные" src={isActiveLike? iconLikeActive : iconLikeDisable} />
            </button>
        </div>
    );
}

export default Place;