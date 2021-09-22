/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {Check} from './Check';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
import {Config, generalConfiguration, Style} from '../types/Config';
import {SetConfigValue} from './ConfigContext';
interface ComponentProps {
    label: string,
    options: string[],
    name: keyof Style | keyof generalConfiguration,
    section: keyof Config,
    description?: ReactElement,
    checkbox?: boolean | null,
    config: Config,
    setConfigValue: SetConfigValue
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const Select = ({label, section, options, name, checkbox, description, config, setConfigValue}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');

    //updates the change of the input
    const handleInputChange = (element: ChangeEvent<HTMLSelectElement>): void => {
        const newValue = element.target.value;
        // updates the local state
        setInputValue(newValue);
        // updates the stored data and the state of config
        setConfigValue(section, name, newValue);
    }

    // loads the cached data
    useEffect(() => {
        const cachedData = config[section as string][name as string];
        //console.log('cachedData: ', cachedData);
        if (typeof(cachedData) !== 'string') return console.log('ERROR: got boolean or undefined. Expected string or undefined'); 
        //console.log(`updated. data: ${cachedData}, section: ${section}, name: ${name}`);
        setInputValue(cachedData);
    }, [config, section, name]);

    return(
        <div className="settings__input_container" >
            <label className="input_container__label select" htmlFor={name as string} >
                {label}
                <select 
                    name={name as string}
                    id={name as string}
                    className="label__select"
                    onChange={handleInputChange}
                    value={inputValue}
                >
                    {options.map( (option) => {
                        return(<option key={option+name} className="select__option" value={option}>{option}</option>)
                    } )}
                </select>
                {checkbox ? <Check name={name+"Checkbox"} section={section} config={config} setConfigValue={setConfigValue} /> : null}
            </label>
            {description ? <div className="input__container_description">description</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
