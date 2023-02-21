import React from 'react';

import DailyWeather from './DailyWeather';

/**
 * DailyForcastContainer: React component that is the main container and renderer for the daily forcast
 * @returns {JSX} 
 */
const DailyForcastContainer = props => {

    const { dailyWeather } = props;

    return (
        <div className='daily-forcast'>
            {dailyWeather && dailyWeather.map((dayData, index) => (
                <DailyWeather
                    key={`daily-weather-${index}`}
                    weather={dayData}
                />
            ))}
        </div>
    );
}

export default DailyForcastContainer;
