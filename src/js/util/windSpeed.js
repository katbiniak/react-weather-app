import { LABELS } from "../constants/labels";
import { UNITS } from "../constants/units";

/**
* getWindSpeed: function that converts the wind speed to a string and makes metric conversion if needed
*
* @param {Number} windSpeed: windspeed amount from api
* @param {String} currentUnit: current selected units, either M or I see UNITS constants file
*/
export function getWindSpeed(windSpeed, currentUnit) {
    if (windSpeed) {
    var speed = windSpeed;
        // metrics enpoint returns m/s instead of mph so multiple to get correct value
        if (currentUnit === UNITS.CELSIUS) {
            speed = speed * 2.237;
        }
        return `${Math.round(speed)} ${LABELS.MPH}`;
    }
    return ''; 
}
