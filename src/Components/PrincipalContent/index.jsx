import React, {useState, useEffect} from "react";
import { userCity } from '../../Services/API'

import sun from '../../Assets/images/sun(1).svg';
import cold from '../../Assets/images/cold.svg';
import cloudy from '../../Assets/images/cloudy.svg';

import './index.scss';

export function MainComponent(){

    const [city, setCity] = useState("");
    const [temp, setTemp] = useState(0);
    const [condition, setCondition] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function fetchAPI(){
          const response = await userCity();
          setCity(response.city);
          setTemp(response.temp);
          setCondition(response.condition);
          setDescription(response.description);
        }
        fetchAPI();
      },[city,temp,condition,description])

      function filterCondition(value){
        if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
        return NaN;
      }

      function numberCondition(){
        let filteredCondition = filterCondition(condition);
        if(filteredCondition < 25){
          return cold
        }else if(filteredCondition => 25 && filteredCondition <= 29){
          return cloudy
        }else{
          return sun
        }
      }

    return(
        <div id="main">
            <div className="container">
                <h1>{city}</h1>
                <h2>{temp}°</h2>
                <img src={numberCondition()} alt="" />
                <span>{description}</span>
            </div>
        </div>
    );
};