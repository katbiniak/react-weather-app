import ForcastApi from '../api/ForcastApi';

/**
 * ForcastActions: Class that contains actions that call upon the forcast api, allows for response sorting before returning to the components
 *  
 */
export default class ForcastActions {
    constructor() {
        this.forcastApi = new ForcastApi();
    }

    /** 
    * getCurrentForcast: Calls the get current forcast api for realtime weather data
    *
    * @param {String} units: metric (M) or imperial (I) units for tempurature data
    */
    getCurrentForcast (units) {
        return this.forcastApi.getCurrentForcast(units).then((response) => {
             return response;
        })

    }

    /** 
    * getWeekForcast: Calls the get week forcast api for daily weather data
    *
    * @param {String} units: metric (M) or imperial (I) units for tempurature data
    */
    getWeekForcast = async (units) => {
        return this.forcastApi.getWeekForcast(units).then((response) => {
            return response;
       })
    }
}