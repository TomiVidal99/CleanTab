/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {FC, useEffect, useState} from 'react';
import {defaultConfig} from '../configurations/defaultConfig';
import {Config, Style} from '../types/Config';
import ConfigContext from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

const userConfigStorageKey = 'userConfig';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAIN CONTENT ~*/
export const ConfigProvider: FC = ({children}) => {
    const [config, setConfig] = useState<Config>(defaultConfig);

    // updates a value of the config
    const setConfigValue = (section: keyof Config, key: keyof Style, value: string | boolean): void => {
        // TODO: BUG direct update from new config object not working for some reason ???

        console.log('UPDATING CONFIG: ', value);

        let newConfig: any= JSON.parse(JSON.stringify(config));
        newConfig[section][key] = value;

        // updates the state
        setConfig(newConfig);

        // saves data to storage
        window.localStorage.setItem(userConfigStorageKey, JSON.stringify(newConfig));

    }

    // update the config on init with the stored value
    useEffect(() => {
        const cachedConfig = window.localStorage.getItem(userConfigStorageKey);
        if (cachedConfig === null) return console.log('ERROR: expected string. got null: ConfigProvider: useEffect');
        console.log('got stored data...');
        setConfig(JSON.parse(cachedConfig));
    }, []);

    return(
        <ConfigContext.Provider 
            value={{
                config: config ? config : defaultConfig,
                setConfigValue: setConfigValue
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
