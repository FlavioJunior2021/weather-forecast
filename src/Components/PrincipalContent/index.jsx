import React, {useState, useEffect} from "react";
import { userCity } from '../../Services/API'

import sun from '../../Assets/images/sun(1).svg';
import cold from '../../Assets/images/cold.svg';
import cloudy from '../../Assets/images/cloudy.svg';

import './index.scss';

export function MainComponent(){

    const [city, setCity] = useState(null);
    const [temp, setTemp] = useState(null);
    const [condition, setCondition] = useState(null);

    useEffect(() => {
        async function fetchAPI(){
          const response = await userCity();
          setCity(response.city);
          setTemp(response.temp);
          setCondition(response.condition);
        }
        fetchAPI();
      },[city])
      function filterCondition(value){
        if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
        return NaN;
      }

    return(
        <div id="main">
            <div className="container">
                <h1>{city}</h1>
                <h2>{temp}°</h2>
            </div>
        </div>
    );
};