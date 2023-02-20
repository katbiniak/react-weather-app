import { MONTHS_SHORT } from "../constants/months";
import { WEEKDAYS } from "../constants/weekdays";

/**
* formattedCurrentDate: function that takes and formats the current date into Weekday, MMM DD, YYYY
*/
export function formattedCurrentDate() {
    let date = new Date();
    let currentWeekday = WEEKDAYS[date.getDay()];
    console.log(currentWeekday);

    let year = date.getFullYear();
    let month = MONTHS_SHORT[date.getMonth()];
    let day = date.getDate();

    return `${currentWeekday}, ${month} ${day} ${year}`;
}