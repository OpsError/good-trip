import React, { FC } from "react";
import './Main.css';
import { IPlaces, ICity } from "../../types/types";
import Search from "../Search/Search";
import EntertainmentList from "../EntertainmentList/EntertainmentList";

interface MainProps {
    cityList: IPlaces[],
    city: ICity,
    openInfo: (element: IPlaces) => void
}

const Main: FC<MainProps> = ({cityList, city, openInfo}) => {
    return(
        <main className="main">
            <Search />
            <EntertainmentList cityList={cityList} city={city} openInfo={openInfo} />
        </main>
    );
}

export default Main;