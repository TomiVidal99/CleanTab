/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {useEffect, useState} from 'react';
import {Config} from '../types/Config';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
export interface WeatherAPI {
    language: string
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

// API CALL
// https://api.openweathermap.org/data/2.5/weather?q=General%20Lamadrid&APPID=0b440372cffdd59274b4e0e2594c2f86&lang=en&units=metric
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
const API_KEY = '0b440372cffdd59274b4e0e2594c2f86';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather?q=';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const useWeather = (config: Config) => {
    const [weather, setWeather] = useState<any | null>(null);

    //useEffect(() => {
        //console.log(`weather updated: ${weather}`);
    //}, [weather]);

    // request to the API
    useEffect( () => {
        if (config.weather === undefined) return;
        const isWeatherActive = config.general.locationCheckbox;
        const weatherQuery = config.general.location;
        if (weatherQuery === undefined || weatherQuery === '' || isWeatherActive === undefined || !isWeatherActive ) return;
        const API_URL = API_BASE.concat(
            `${weatherQuery.split(' ').join('%20')}`,
            `&APPID=${API_KEY}`,
            `&lang=${config.general.locale.split('-')[0]}`,
            `&units=${config.general.units ? config.general.units : 'metric'}`
        );
        //console.log(API_URL);

        window.fetch(API_URL, {method: 'GET'}).then( (response) => {
            response.json().then( (data) => {
                setWeather(data);
            }).catch( (err) => {throw err} );
        }).catch( (err) => {throw err} );

    }, [config]);

    return([weather]);
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
