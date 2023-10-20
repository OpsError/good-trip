import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import { ICity, IPlaces } from '../../types/types';
import api from '../../utils/Api';
import Main from '../Main/Main';
import PopupGeo from '../PopupGeo/PopupGeo';
import PopupAuto from '../PopupAuto/PopupAuto';

function App() {
  const [isOpenPopupGeo, setIsOpenPopupGeo] = React.useState<boolean>(false);
  const [isOpenNavbar, setIsOpenNavbar] = React.useState<boolean>(false);
  const [isOpenPopupAuto, setIsOpenPopupAuto] = React.useState<boolean>(false);
  const [cityHeader, setCityHeader] = React.useState<ICity>(JSON.parse(localStorage.getItem('city') || '{"key": 0, "name": "Москва"}'));
  const [arrayPlaces, setArrayPlaces] = React.useState<IPlaces[]>([]);

  const openPopupGeo = () => {
    setIsOpenPopupGeo(true);
    setIsOpenNavbar(false);
  }

  const openNavbar = () => {
    setIsOpenNavbar(true);
  }

  const openPopupAuto = () => {
    setIsOpenPopupAuto(true);
    setIsOpenNavbar(false);
  }

  const closeAllPopups = () => {
    setIsOpenPopupGeo(false);
    setIsOpenNavbar(false);
    setIsOpenPopupAuto(false);
  }

  const closePopupButton = (evt: any) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('navbar') || (evt.target.classList.contains('popup__close')) || (evt.key === 'Escape')) {
        closeAllPopups();
    }
}

  const changeCity = (city: ICity) => {
    setCityHeader(city);
    closeAllPopups();
  }

  useEffect(() => {
    localStorage.setItem('city', JSON.stringify(cityHeader));
  }, [cityHeader]);

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
      <Header city={cityHeader} openPopupGeo={openPopupGeo} isOpenNavbar={isOpenNavbar} openNavbar={openNavbar} openPopupAuto={openPopupAuto} onClose={closePopupButton} />
      <Routes>
        <Route path='/*' element={<Main cityList={arrayPlaces} city={cityHeader} />} />
      </Routes>
      
      <PopupGeo open={isOpenPopupGeo} openPopup={openPopupGeo} changeCity={changeCity} onClose={closePopupButton} />
      <PopupAuto open={isOpenPopupAuto} openPopup={openPopupAuto} onClose={closePopupButton} />
    </section>
  );
}

export default App;
