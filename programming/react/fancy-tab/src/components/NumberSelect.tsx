/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {Config, generalConfiguration, Style} from '../types/Config';
import {SetConfigValue} from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    label: string,
    name: keyof Style | keyof generalConfiguration,
    section: keyof Config,
    config: Config,
    setConfigValue: SetConfigValue,
    description?: ReactElement
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DEFAULT VALUES ~~~~~*/
const defaultValues = {
    inputMax: "30",
    inputMin: "0.1",
    inputStep: "0.1"
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const NumberSelect = ({label, name, section, config, setConfigValue, description}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('1');

    // updates the local and global state, and saves the data into the local storage
    const handleInputChange = (element: ChangeEvent<HTMLInputElement>): void => {
        const newValue = element.target.value;

        // updates the local state
        setInputValue(newValue);

        // updates the global state and stores the data into the localStorage
        setConfigValue(section, name, newValue+'vmin');

    }

    // gets the saves data on window.localStorage
    useEffect(() => {
        const cachedData = config[section][name];
        console.log( `cachedData: ${cachedData}` );
        if (typeof(cachedData) !== 'string') return console.log(`ERROR: expected string. got ${typeof(cachedData)}. NumberSelect.tsx`);
        const reducedData = cachedData.split('vmin');
        if (reducedData.length === 0) return console.log("ERROR: expected string to have 'vmin'. NumberSelect.tsx");
        setInputValue(reducedData[0]);
    }, [config]);

    return(
        <div className="settings__input_container">
            <label htmlFor={name as string} className="input_container__label number_select">
                {label}
                <input 
                    onChange={handleInputChange}
                    value={inputValue}
                    max={defaultValues.inputMax}
                    min={defaultValues.inputMin}
                    step={defaultValues.inputStep}
                    name={name as string}
                    id={name as string}
                    type="number"
                    className="label__input"
                />
            </label>
            {description ? <div className="input__container_description">{description}</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
