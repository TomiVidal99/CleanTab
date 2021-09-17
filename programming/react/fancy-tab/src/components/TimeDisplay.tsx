/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement, useEffect, useState} from 'react';
import {useWeather} from './../hooks/useWeather';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ASSETS ~~~~~*/
import './../styles/Weather.css';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
import {Style} from './../types/Config';
interface Props {
    locale: string,
    timeStyle: Style,
    dateStyle: Style,
    descriptionStyle: Style
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const TimeDisplay = ({locale, dateStyle, timeStyle, descriptionStyle}: Props): ReactElement => {
    const [time, setTime] = useState(new Date());
    const [weather] = useWeather(null);

    //update the time every second
    useEffect( () => {
        const updateTime = setInterval( () => {
            setTime(new Date());
        }, 1000 );
        return() => {clearInterval(updateTime)};
    }, [time]);

    return(
        <div className="timeDisplay">
            <time style={timeStyle} className="timeDisplay__time">
                {time.toLocaleTimeString(locale)}
            </time>
            <time style={dateStyle} className="timeDisplay__date">
                {time.toLocaleDateString(locale)}
            </time>
            <p style={descriptionStyle} className="timeDisplay__description">{weather ? 'description' : ''}</p>
        </div>
    );
}
