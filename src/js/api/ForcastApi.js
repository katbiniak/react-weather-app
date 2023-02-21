import axios from 'axios';
import { API_ENDPOINTS } from '../constants/api-endpoints';

/**
 * ForcastApi: Class that containsforcast api calls and parsing of response data
 *  
 */
export default class ForcastApi {
    constructor() {
        this.API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        this.baseUrl = API_ENDPOINTS.BASE;
    }

    /** 
    * getCurrentForcast: Calls the get current forcast api for realtime weather data
    *
    * @param {String} units: metric (M) or imperial (I) units for tempurature data
    */
    getCurrentForcast = async (units) => {
        try {
            let url = `${this.baseUrl}${API_ENDPOINTS.CURRENT}?&key=${this.API_KEY}&lat=32.7904&lon=-96.8044&units=${units}`;

            const response = await axios.get(url);

            if (response?.data?.data.length > 0) {
                return response.data.data[0];
            }

            return {
                ...response
            }
        } catch (e) {
            console.error('Current Forcast Error:', e)
        }

    }

    /** 
    * getWeekForcast: Calls the get current forcast api for weather data for the next 5 days
    *
    * @param {String} units: metric (M) or imperial (I) units for tempurature data
    */
    getWeekForcast = async (units) => {
        try {
            let url = `${this.baseUrl}${API_ENDPOINTS.FORCAST}?key=${this.API_KEY}&lat=32.7904&lon=-96.8044&days=6&units=${units}`;

            const response = await axios.get(url);

            if (response?.data?.data.length > 0) {
                // drop the first item from dates array as it is the current day which we do not need
                let data = response.data.data;
                data.shift();
                return data;
            }

            return {
                ...response
            }
        } catch (e) {
            console.error('Week Forcast Error:', e)
        }
    }
}