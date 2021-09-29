/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {CSSProperties, Fragment, ReactElement, useContext} from 'react';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ASSETS ~~~~~*/
import './../styles/Weather.css';
import ConfigContext from './ConfigContext';
import WeatherContext from './WeatherContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

const tempCaracter = '🌡';
const humCaracter = '💧 ';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const Weather = (): ReactElement => {
    const {config} = useContext(ConfigContext);
    const weather = useContext(WeatherContext);

    return(
        <Fragment>
            {config.general.locationCheckbox ? 

                <div style={config.weather as CSSProperties} className="weather">
                    <div className="weather__temperature">
                        {tempCaracter} Temp <span className="temperature" id="temperature">
                            {weather ? weather.main ? weather.main.temp+'°' : null : null}
                        </span>
                    </div>
                    <div className="weather__humidity">
                        {humCaracter} Hum <span className="humidity" id="humidity">
                            {weather ? (weather.main ? weather.main.humidity+'%' : null) : null}
                        </span>
                    </div>
                </div>

            : null }
        </Fragment>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
