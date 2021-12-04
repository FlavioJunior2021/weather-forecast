import React, { useState, useEffect } from "react";

import { userCity } from '../../Services/API';

import sunrise_img from '../../Assets/images/sunrise(1).svg';
import sunset_img from '../../Assets/images/sunset.svg';

import './index.scss';

export function SunsetSunriseLine(){

    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");

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
                <img src={sunrise_img} alt="" />
                <p>sunrise</p>
                <span>{sunrise}</span>
            </div>
            <div className="sunset">
                <img src={sunset_img} alt="" />
                <p>sunset</p>
                <span>{sunset}</span>
            </div>
        </div>
    );
};