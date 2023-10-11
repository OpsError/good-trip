import React, { FC } from "react";
import './Main.css';
import { IPlaces, ICity } from "../../types/types";
import Search from "../Search/Search";
import EntertainmentList from "../EntertainmentList/EntertainmentList";

interface MainProps {
    cityList: IPlaces[],
    city: ICity
}

const Main: FC<MainProps> = ({cityList, city}) => {
    return(
        <main className="main">
            <Search />
            <EntertainmentList cityList={cityList} city={city} />
        </main>
    );
}

export default Main;