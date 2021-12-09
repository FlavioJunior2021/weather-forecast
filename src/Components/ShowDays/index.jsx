import React, { useState, useEffect } from "react";

import { getForecast } from "../../Services/API";
import { DayComponent } from '../DayComponent/index';

import './index.scss';

export function ShowDays(){

    const [days, setDays] = useState([]);
    const array = [];

    useEffect(() => {
        async function showForecast(){
            for(let i = 0; i < 7; i++) {
                let day = await getForecast(i);
                let obj = {
                    Date: day.date,
                    wWekday: day.weekday,
                    Description: day.description,
                    Min: day.min,
                    Max: day.max
                };
               array.push(obj);
            }
            if(array.length > 0){
                setDays(array);
            }
        }
        showForecast();
    },[]);

    return(
        <div id="container">
           <div>
              {days.map((day, index) => {
                  return (
                      <DayComponent
                        key={index}
                        date={day.Date}
                        weekday={day.Weekday}
                        description={day.Description}
                        min={day.Min}
                        max={day.Max}
                    />
                  )
              })}
           </div>
        </div>
    );
};