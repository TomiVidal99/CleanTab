/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {Config, generalConfiguration, Style} from '../types/Config';
import {Check} from './Check';
import {SetConfigValue} from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    label: string,
    name: keyof Config | keyof generalConfiguration,
    placeholder: string,
    checkbox?: boolean,
    description?: ReactElement,
    section: keyof Style,
    config: Config,
    setConfigValue: SetConfigValue
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const InputData = ({label, name, placeholder, checkbox, section, description, config, setConfigValue}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');

    // get the initial data from global state
    useEffect(() => {
        const cachedData = config[section][name];
        if (typeof(cachedData) !== 'string') return console.log(`ERROR: expected string. got ${typeof(cachedData)}. InputData.tsx, ln 31`);
        setInputValue(cachedData);
    }, [config]);

    // updates the local, global states and saves the new data into the localstorage
    const handleChangeInput = (element: ChangeEvent<HTMLInputElement>): void => {
        const newValue = element.target.value;
        console.log(`Updated value: ${newValue}`);

        // updates local state
        setInputValue(newValue);

        // updates the global state and stores it into the localstorage
        setConfigValue(section, name, newValue);

    }

    return(
        <div className="settings__input_container">
            <label className="input_container__label" htmlFor={name as string}>
                {label}
                <input 
                    onChange={handleChangeInput} 
                    placeholder={placeholder}
                    value={inputValue}
                    id={name as string}
                    name={name as string}
                    className="label__input" type="text" 
                />
                {checkbox ? <Check name={name+"Checkbox"} section={section} config={config} setConfigValue={setConfigValue} /> : null}
            </label>
            {description ? <div className="input__container_description">{description}</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
