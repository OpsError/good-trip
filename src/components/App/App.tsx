import React, { useState, useEffect, FC} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import api from '../../utils/Api';
import Header from '../Header/Header';
import { ICity } from '../../types/types';

const App: FC = () => {
  const [city, setCity] = useState<ICity>({ name: '', _id: '' });

  // получение location или если его нет в localStorage, то
  // в city вставить дефолтное значение
  useEffect(() => {
    const location: ICity = JSON.parse(localStorage.getItem('location') || "null");
    if (location) {
      setCity(location);
    } else {
      api.getCity('655cd9f4d98ebf6437548bc0')
      .then((city) => setCity(city))
      .catch(err => console.log(err));
    }
  }, []);
  return (
    <section className="App">
      <Header city={city} />
    </section>
  );
}

export default App;
