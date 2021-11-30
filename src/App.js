import React, { useState , useEffect } from 'react';
import { searchCity, userCity } from './Services/API';

import { MainComponent } from './Components/PrincipalContent/index'

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
      <MainComponent />
    </div>
  );
}

export default App;
