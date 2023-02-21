import React from 'react';

import { getWindSpeed } from '../util/windSpeed';
import { LABELS } from '../constants/labels';

/**
 * CurrentWeather: React component that is the main container and renderer for current weather information
 * @returns {JSX} 
 */
const CurrentWeather = props => {

    const { currentUnit, weather } = props;
    const windSpeed = getWindSpeed(weather?.wind_spd, currentUnit );

    return (
        <div className='current-weather'>
            <p className='current-weather--tempurature'>
                {`${Math.round(weather?.temp) || 'N/A'}${LABELS.DEGREES}`}
            </p>
            <div className='current-weather--secondary'>
                <p className='current-weather--description '>
                    {weather.weather?.description || ''}
                </p>
                <p className='current-weather--windspeed'>
                    {windSpeed}
                </p>
            </div>
        </div>
    );
}

export default CurrentWeather;
