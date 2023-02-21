import React from 'react';
import { getDayOfWeek } from "../util/dates";
import { LABELS } from '../constants/labels';

/**
 * DailyWeather: React component that displays a single day of weather data
 * @returns {JSX} 
 */
const DailyWeather = (props) => {

    const { weather } = props;

    return (
        <div className='daily-weather'>
            <p className='daily-weather--day'>
                {getDayOfWeek(weather?.valid_date)}
            </p>
            <img
                className='daily-weather--icon'
                src={require(`../../resources/icons/${weather?.weather?.icon}.png`)}
                alt={weather?.weather?.description}
            />
            <p className='daily-weather--temperature'>
                {`${Math.round(weather?.high_temp) || 'N/A'}${LABELS.DEGREES}`}
            </p>
        </div>
    );
}

export default DailyWeather;
