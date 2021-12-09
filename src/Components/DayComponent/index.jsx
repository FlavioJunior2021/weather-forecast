import React from 'react';

import './index.scss';

export function DayComponent({
    date,
    weekday,
    description,
    min,
    max,
}){
    return(
        <div id="days-line">
            <p>{date}</p>
            <p>{weekday}</p>
            <span>{min}°</span>
            <span>{max}°</span>
            <span>{description}</span>
        </div>
    )
}