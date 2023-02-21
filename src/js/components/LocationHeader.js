import React from "react";
import { ReactComponent as LocationIcon } from "../../resources/location.svg";
import { formattedCurrentDate } from "../util/dates";
import { LABELS}  from '../constants/labels';


/**
 * LocationHeader: React component that is the renders the current location and date
 * @returns {JSX} 
 */
const LocationHeader = () => {

    const currentDate = formattedCurrentDate();

    return (
        <div className="location-header--container">
            <p className="location-header--name">
                <LocationIcon />
                {LABELS.LOCATION}
            </p>
            <p className="location-header--date">
                {currentDate}
            </p>
        </div>
    );
}

export default LocationHeader;
