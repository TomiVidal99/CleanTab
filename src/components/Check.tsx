/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {Config, generalConfiguration, Style} from '../types/Config';
import {SetConfigValue} from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    name: keyof Style | keyof generalConfiguration,
    section: keyof Config,
    config: Config,
    setConfigValue: SetConfigValue
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const Check = ({name, section, config, setConfigValue}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState<boolean>(false);

    // updates the local and global state and saves the new data into the localstorage
    const handleInputChange = (element: ChangeEvent<HTMLInputElement>): void => {
        const newValue = element.target.checked;

        // update the local state
        setInputValue(newValue);

        // updates the global state and store the new value into the localstorage
        setConfigValue(section, name, newValue);

    }

    //updates the value on init and when the config changes
    useEffect(() => {
        //console.log(`Section: ${section}, name: ${name}`);
        const cachedData = config[section][name];
        if (typeof(cachedData) !== 'boolean') return console.log(`ERROR: expected boolean. got ${typeof(cachedData)}. Check.tsx`);
        setInputValue(cachedData);
    }, [config, section, name]);

    return(
        <input
            className="checkbox"
            onChange={handleInputChange}
            checked={inputValue}
            type="checkbox"
            name={name as string}
            id={name as string}
        />
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
