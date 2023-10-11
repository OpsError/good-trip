import React, { FC } from "react";
import './EntertainmentList.css'
import { IPlaces, ICity } from "../../types/types";
import Place from "../Place/Place";

interface EntertainmentListProps {
    cityList: IPlaces[],
    city: ICity
}

const EntertainmentList: FC<EntertainmentListProps> = ({cityList, city}) => {
    return(
        <div className="main__places places">
            {
                cityList.map((element: IPlaces)  => {
                    if (element.cityId === Number(city.key)) {
                        return <Place key={element.id} name={element.name} link={element.link} address={element.address} />
                    } else {
                        return null;
                    }
                })
            }
        </div>
    );
}

export default EntertainmentList;