export interface ICity {
    name: string;
    _id: string;
}

export interface IPlace {
    _id: string,
    cityId: string,
    name: string, 
    description: string, 
    address: string, 
    photo: string
}