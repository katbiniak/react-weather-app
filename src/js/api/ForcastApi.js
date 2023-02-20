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
            let url = `${this.baseUrl}${API_ENDPOINTS.CURRENT}?&key=${this.API_KEY}&postal_code=75201&country=US&units=${units}`;

            const response = await axios.get(url);
            console.log(response);
            return {
                ...response
            }
        } catch (e) {
            console.error('Current Forcast Error:', e)
        }

    }

    getWeekForcast = async (units) => {
        try {
            let url = `${this.baseUrl}${API_ENDPOINTS.FORCAST}?key=${this.API_KEY}&postal_code=75201&country=US&days=6&units=${units}`;

            const response = await axios.get(url);
            console.log(response);
            return {
                ...response
            }
        } catch (e) {
            console.error('Week Forcast Error:', e)
        }
    }
}