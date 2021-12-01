import React, { useState, useEffect } from "react";

import { userCity } from '../../Services/API'

import './index.scss';

export function SunsetSunriseLine(){

    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);

    useEffect(()=>{

        async function renderSunrise(){
            const response = await userCity();
            setSunrise(response.sunrise);
            setSunset(response.sunset);
        }
        
        renderSunrise();

    },[sunset, sunrise])

    return(
        <div id="container">
            <div className="sunrise">
                <p>sunrise</p>
                <span>{sunrise}</span>
            </div>
            <div className="sunset">
                <p>sunset</p>
                <span>{sunset}</span>
            </div>
        </div>
    );
};