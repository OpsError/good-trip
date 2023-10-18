import React, { FC } from "react";
import './Search.css';
import searchIcon from '../../images/search-icon.svg';

const Search: FC = () => {
    // пока поставила any поскольку я не знаю тип event'а
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return(
        <div className="search">
            <form className="search__form" onSubmit={event => handleSubmit(event)}>
                <div className="search__input-container">
                    <input className="search__input" placeholder="давай искать" />
                    <button type="submit" className="search__icon-container" onClick={event => handleSubmit(event)}>
                        <img className="search__icon" src={searchIcon} alt="Поиск" />
                    </button>
                </div>
            </form>

        </div>
    );
}

export default Search;