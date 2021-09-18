/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import Description from '../types/Descriptions';
import {Check} from './Check';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    label: string,
    options: string[],
    name: string,
    description?: ReactElement,
    checkbox?: boolean | null
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const Select = ({label, options, name, checkbox, description}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState('');

    //updates the change of the input
    const handleInputChange = (element: ChangeEvent<HTMLSelectElement>): void => {
        const newValue = element.target.value;
        setInputValue(newValue);
    }

    // loads the cached data
    useEffect(() => {
        const cachedData = window.localStorage.getItem(name);
        if (cachedData) {
            setInputValue(cachedData);
        }
    }, [name]);

    // saves data into window.localStorage
    const handleCacheData = (): void => {
        window.localStorage.setItem(name, inputValue);
    }

    return(
        <div className="settings__input_container" >
            <label className="input_container__label select" htmlFor={name}>
                {label}
                <select 
                    name={name}
                    id={name}
                    className="label__select"
                    onBlur={handleCacheData}
                    onChange={handleInputChange}
                    value={inputValue}
                >
                    {options.map( (option) => {
                        return(<option key={option+name} className="select__option" value={option}>{option}</option>)
                    } )}
                </select>
                {checkbox ? <Check name={name+"Checkbox"} /> : null}
            </label>
            {description ? <div className="input__container_description">description</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
