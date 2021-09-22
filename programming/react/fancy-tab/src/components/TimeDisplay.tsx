/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {CSSProperties, ReactElement, useContext, useEffect, useState} from 'react';
import {useConfig} from '../hooks/useConfig';
import {useWeather} from './../hooks/useWeather';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ASSETS ~~~~~*/
import './../styles/TimeDisplay.css';
import ConfigContext from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const TimeDisplay = (): ReactElement => {
    // TODO: create a context for the weather data and a hook for the weather request

    const [time, setTime] = useState(new Date());
    const {config} = useContext(ConfigContext);

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
                {time.toLocaleDateString(config.general.locale)}
            </time>

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ WEATHER DESCRIPTION ~~~~~*/}
            <p style={config.description as CSSProperties} className="time_display__description">
                {/*weather ? 'description' : ''*/}
                weather description
            </p>
        </div>
    );
}
