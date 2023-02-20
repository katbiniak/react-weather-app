import React from 'react';

// Component Imports
import LocationHeader from './LocationHeader';
import FloatingWeatherContainer from './FloatingWeatherContainer';

/**
 * WeatherApp: React component that is the main container and renderer for the Weather application
 * @returns {JSX} 
 */
const WeatherApp = () => {

  return (
    <div className="weather-app--container">
      <LocationHeader
      />
      <FloatingWeatherContainer
      />
    </div>
  );
}

export default WeatherApp;
