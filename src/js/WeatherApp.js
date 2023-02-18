import React from 'react';

// Style Imports
import '../css/WeatherApp.scss';

// Component Imports
import LocationHeader from './LocationHeader';
import FloatingWeatherContainer from './FloatingWeatherContainer';

/**
 * WeatherApp: React component that is the main container and renderer for the Weather application, calls initial API to populate the store
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
