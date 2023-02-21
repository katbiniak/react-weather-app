import { MONTHS_SHORT } from "../constants/months";
import { WEEKDAYS, WEEKDAYS_SHORT } from "../constants/weekdays";

/**
* formattedCurrentDate: function that takes and formats the current date into Weekday, MMM DD, YYYY
*/
export function formattedCurrentDate() {
    let date = new Date();
    let currentWeekday = WEEKDAYS[date.getDay()] || '';

    let year = date.getFullYear();
    let month = MONTHS_SHORT[date.getMonth()] || '';
    let day = date.getDate();

    return `${currentWeekday}, ${month} ${day} ${year}`;
}

/**
* getDayOfWeek: function that takes in a date object and returns the short day of the week
*
*@param {String} date: date string in the form of YYYY-MM-DD
*/
export function getDayOfWeek(date){
    let dateObj = new Date(`${date}T12:00:00Z`);

    return WEEKDAYS_SHORT[dateObj.getDay()] || '';
}