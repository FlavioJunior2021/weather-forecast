import React, { useState , useEffect } from 'react';
import { searchCity, userCity } from './Services/API';

import logo from './Assets/images/w.svg';
import menu from './Assets/images/menu.svg';
import sunset from './Assets/images/sunset.svg';
import sun from './Assets/images/sun.svg';
import moon from './Assets/images/moon.svg';


import './Scss/App.scss';


function App() {

  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [currently, setCurrently] = useState(null);
  const [humidity,setHumidity] = useState(null);
  const [sunrise,setSunrise] = useState(null);
  const [sunset,setSunset] = useState(null);

  useEffect(() => {
    async function fetchAPI(){
      const response = await userCity();
      setCity(response.city);
      setTemp(response.temp);
      setDescription(response.description);
      setCurrently(response.currently);
      setHumidity(response.humidity);
      setSunset(response.sunset);
      setSunrise(response.sunrise)
    }
    fetchAPI();
  },[city])

  return (
    <div id="App">
      <header className="header">
          <div className="logo">
              <img src={ logo } alt="logo.svg" />
          </div>
          <div className="menu">
              <button className="menu-btn">
                <img src={ menu } alt="menu.svg" />
              </button>
          </div>
      </header>
      <main className="main-content">
        <div className="result-temp">
          <h1>
            {city}
          </h1>
          <h2>
            {temp}°
          </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
