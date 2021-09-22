/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {FC, useContext} from 'react';
import {useWeather} from '../hooks/useWeather';
import ConfigContext from './ConfigContext';
import WeatherContext from './WeatherContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAIN CONTENT ~*/
export const WeatherProvider: FC = ({children}) => {
    // USAGE IMPORTANT: need to be inside the config context because it needs the global config to retrieve the weather data.
    const {config} = useContext(ConfigContext);
    const [weather] = useWeather(config);

    return(
        <WeatherContext.Provider value={weather} >
            {children}
        </WeatherContext.Provider>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
