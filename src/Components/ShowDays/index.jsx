import React, { useState, useEffect } from "react";

import { getForecast } from "../../Services/API";
import { DayComponent } from '../DayComponent/index';

import './index.scss';

export function ShowDays(){

    const [days, setDays] = useState([]);

    useEffect(() => {
        async function showForecast(){
            let day = await getForecast(0);
            setDays(day); 
            console.log(day);
        }
        showForecast();
    },[])

    return(
        <div id="container">
           <div>
              {days.map(day => {
                  return (
                      <DayComponent
                        key={day.date}
                        date={day.date}
                        weekday={day.weekday}
                        description={day.description}
                        min={day.min}
                        max={day.max}
                    />
                  )
              })}
           </div>
        </div>
    );
};