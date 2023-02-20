
import React, { useEffect, useState } from 'react';

import ForcastActions from '../actions/ForcastActions';
import { UNITS } from '../constants/units';
/**
 * FloatingWeatherContainer: React component that is the main container and renderer for the Weather application, calls initial API to populate the store
 * @returns {JSX} 
 */
const FloatingWeatherContainer = () => {

  const [ currentUnit, setCurrentUnit ] = useState(UNITS.FAHRENHEIT);
  const [ shouldUpdateWeather, setShouldUpdateWeather ] = useState(true);
  const [ currentWeather, setCurrentWeather ] = useState();
  const [ dailyWeather, setDailyWeather ] = useState();

  const forcastActions = new ForcastActions();

  /**
  * getCurrentWeather: Calls the current weather action to get the data needed for Location Header
  */
  const getCurrentWeather = () => {
    forcastActions.getCurrentForcast(currentUnit).then( response => {
      if (response) {
        setCurrentWeather(response);
      }
    });
  }

  /**
  * getDailyWeather: Calls the week forcast action to get the data needed for Floating Weather Container
  */
  const getDailyWeather = () => {
    forcastActions.getWeekForcast(currentUnit).then( response => {
      if (response) {
        setDailyWeather(response);
      }
    });
  }

  useEffect (() => {
    if (shouldUpdateWeather) {
      setShouldUpdateWeather(false);
      // getCurrentWeather();
      // getDailyWeather();
      console.log('called here');
    }
  }, [shouldUpdateWeather]);


  return (
    <div className="floating-weather--container">
      <div className="floating-weather--background">

      </div>
    </div>
  );
}

export default FloatingWeatherContainer;
