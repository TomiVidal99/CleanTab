/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {CSSProperties, ReactElement, useContext, useEffect, useState} from 'react';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ASSETS ~~~~~*/
import './../styles/TimeDisplay.css';
import ConfigContext from './ConfigContext';
import WeatherContext from './WeatherContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const TimeDisplay = (): ReactElement => {
    const [time, setTime] = useState(new Date());
    const {config} = useContext(ConfigContext);
    const weather = useContext(WeatherContext);

    //update the time every second
    useEffect( () => {
        const updateTime = setInterval( () => {
            setTime(new Date());
        }, 1000 );
        return() => {clearInterval(updateTime)};
    }, [time]);

    return(
        <div className="time_display">

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TIME ~~~~~*/}
            <time style={config.time as CSSProperties} className="time_display__time">
                {time.toLocaleTimeString(config.general.locale)}
            </time>

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DATE~~~~~*/}
            <time style={config.date as CSSProperties} className="time_display__date">
                {config.general.dateFormatCheckbox ? time.toLocaleDateString(config.general.locale) : null}
                {/*time.toLocaleDateString(config.general.dateFormat === 'automatic' ? config.general.locale : config.general.dateFormat)*/}
            </time>

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ WEATHER DESCRIPTION ~~~~~*/}
            <p style={config.description as CSSProperties} className="time_display__description">
                {config.general.weatherDescriptionCheckbox ? (weather ? weather.weather[0].description : null) : null}
            </p>
        </div>
    );
}
