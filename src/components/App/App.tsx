import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { ICity, IPlaces } from '../../types/types';
import api from '../../utils/Api';
import Main from '../Main/Main';
import PopupGeo from '../PopupGeo/PopupGeo';

function App() {
  const [isOpenPopupGeo, setIsOpenPopupGeo] = React.useState<boolean>(false);
  const [cityHeader, setCityHeader] = React.useState<ICity>({
    key: 0, name: 'Москва'
  });
  const [arrayPlaces, setArrayPlaces] = React.useState<IPlaces[]>([]);

  const openPopupGeo = () => {
    setIsOpenPopupGeo(isOpenPopupGeo => !isOpenPopupGeo);
  }

  const changeCity = (city: ICity) => {
    setCityHeader(city);
    openPopupGeo();
  }

  const getPlacesCities = () => {
    api.getPlaces()
    .then((res: IPlaces[]) => setArrayPlaces(res))
    .catch((res: any) => console.log(res));
  }

  React.useEffect(() => {
    getPlacesCities();
  }, []);
  return (
    <section className="App">
      <Header city={cityHeader} openPopupGeo={openPopupGeo} />
      <Main cityList={arrayPlaces} city={cityHeader} />
      <PopupGeo open={isOpenPopupGeo} openPopup={openPopupGeo} changeCity={changeCity} />
    </section>
  );
}

export default App;
