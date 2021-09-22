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
    description?: ReactElement,
    config: Config,
    setConfigValue: SetConfigValue
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const ColorSelect = ({label, name, description, section, config, setConfigValue}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('#000');

    //updates the current selected color, the global state and saves it to the localStorage
    const handleColorPicked = (event: ChangeEvent<HTMLInputElement>): void => {
        const newColor = event.target.value;
        console.log(`New color picked: ${newColor}`);

        if (typeof(name) !== 'string') return console.log('ERROR: expected string. got number or undefined. ColorSelect.tsx, ln 30');

        // update the local state
        setInputValue(newColor);

        // updates the global state and saves the data the localStorage
        setConfigValue(section, name, newColor);
    }

    // loads initial state on init and config update
    useEffect(() => {
        const cachedData = config[section][name];
        if (typeof(cachedData) !== 'string') return console.log('ERROR: expected string. got boolean or undefined: ColorSelect.tsx: ln 40')
        //console.log(`cachedData: ${cachedData}`);
        setInputValue(cachedData);
    }, [config, section, name]);

    return(
        <div className="settings__input_container">
            <label className="input_container__label color_select" htmlFor={name as string}>
                {label}
                <input 
                    className="color_input"
                    type="color"
                    name={name as string}
                    id={name as string}
                    onChange={handleColorPicked}
                    value={inputValue}
                />
            </label>
            {description ? <div className="input__container_description">{description}</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
