import React, { useState , useEffect } from 'react';
import { searchCity, userCity } from './Services/API';

import logo from './Assets/images/w.svg';
import menu from './Assets/images/menu.svg';

import './Scss/App.scss';


function App() {

  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [currently, setCurrently] = useState(null);
  const [humidity,setHumidity] = useState(null);

  useEffect(() => {
    async function fetchAPI(){
      const response = await userCity();
      setCity(response.city);
      setTemp(response.temp);
      setDescription(response.description);
      setCurrently(response.currently);
      setHumidity(response.humidity)
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
         <h2>
           {city}
           {temp}
           {description}
           {humidity}
           {currently}
         </h2>
      </main>
    </div>
  );
}

export default App;
