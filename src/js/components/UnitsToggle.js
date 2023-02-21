import React, { useState } from 'react';
import { LABELS } from '../constants/labels';
import { UNITS } from '../constants/units';

/**
 * UnitsToggle: React component that is a toggle between metric or imperial units, triggers new api calls
 * @returns {JSX} 
 */
const UnitsToggle = props => {

    const { setCurrentUnit, shouldUpdateWeather} = props;
    const [checked, setChecked] = useState(true);

    /**
     * handleUnitsChange: onChange event for the input toggle, triggers callback to update the units and make api calls
     */
    const handleUnitsChange = () => {
        setChecked(!checked);
        
        if (checked) {
            setCurrentUnit(UNITS.CELSIUS);
        } else {
            setCurrentUnit(UNITS.FAHRENHEIT);
        }
        shouldUpdateWeather(true);
    }

    return (
        <div className='units-toggle'>
            <label htmlFor='unit-toggle'>
                <input
                    aria-label='Toggle Tempurature Units'
                    id='unit-toggle'
                    className='units-toggle--input'
                    type='checkbox'
                    onChange={handleUnitsChange}
                    checked={checked}
                />
            <span className='units-toggle--slider'></span>
                <div className={`units-toggle--unit ${checked ? 'units-toggle--checked' : ''}`}>
                    <span id='celsius'>
                        {LABELS.CELSIUS + LABELS.DEGREES}
                    </span>
                    <span id ='fahrenheit'>
                        {LABELS.FAHRENHEIT + LABELS.DEGREES}
                    </span>
                </div>
            </label>
        </div>
    );
}

export default UnitsToggle;
