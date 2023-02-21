import React, { useCallback, useEffect, useMemo, useState } from 'react';

// Component Imports
import CurrentWeather from './CurrentWeather';
import DailyForcastContainer from './DailyForcastContainer';
import UnitsToggle from './UnitsToggle';

// Helper Imports
import ForcastActions from '../actions/ForcastActions';
import { UNITS } from '../constants/units';

//Image Imports
import dallas from '../../resources/dallas.png';
import cloudLarge from '../../resources/cloud-big.png';
import cloudSmall from '../../resources/cloud-small.png';

/**
 * FloatingWeatherContainer: React component that is the main container for forcast data, calls initial APIs to populate the store
 * @returns {JSX} 
 */
const FloatingWeatherContainer = () => {

    const [ currentUnit, setCurrentUnit ] = useState(UNITS.FAHRENHEIT);
    const [ shouldUpdateWeather, setShouldUpdateWeather ] = useState(true);
    const [ currentWeather, setCurrentWeather ] = useState();
    const [ dailyWeather, setDailyWeather ] = useState();

    const forcastActions = useMemo(() => new ForcastActions(), []);

    /**
     * getCurrentWeather: Calls the current weather action to get the data needed for Location Header
     */
    const getCurrentWeather = useCallback(() => {
        forcastActions.getCurrentForcast(currentUnit).then( response => {
            if (response) {
                setCurrentWeather(response);
            }
        });
    }, [currentUnit, forcastActions]);

    /**
     * getDailyWeather: Calls the week forcast action to get the data needed for Floating Weather Container
     */
    const getDailyWeather = useCallback(() => {
        forcastActions.getWeekForcast(currentUnit).then( response => {
            if (response) {
                setDailyWeather(response);
            }
        });
    }, [currentUnit, forcastActions]);

    useEffect (() => {
        if (shouldUpdateWeather) {
            setShouldUpdateWeather(false);
            getCurrentWeather();
            getDailyWeather();
        }
    }, [
        getCurrentWeather,
        getDailyWeather,
        shouldUpdateWeather,
        setShouldUpdateWeather
    ]);

    return (
        <div className='floating-weather floating-weather--container'>
            <div className='floating-weather--background'>
                <img className='cloud-img cloud-img--small' src={cloudSmall} alt=''/>
                <img className='dallas-skyline-img' src={dallas} alt='Dallas Skyline'/>
                <img className='cloud-img cloud-img--big' src={cloudLarge} alt=''/>
            </div>
            <div className='floating-weather--data'>
                <UnitsToggle
                    setCurrentUnit={setCurrentUnit}
                    shouldUpdateWeather={setShouldUpdateWeather}
                />
                {currentWeather &&
                    <CurrentWeather
                        currentUnit={currentUnit}
                        weather={currentWeather}
                    /> 
                }
            </div>
            <DailyForcastContainer
                dailyWeather={dailyWeather}
            />
        </div>
    );
}

export default FloatingWeatherContainer;
