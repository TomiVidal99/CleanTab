/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {Check} from './Check';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    label: string,
    name: string,
    placeholder: string,
    checkbox?: boolean,
    description?: ReactElement
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const InputData = ({label, name, placeholder, checkbox, description}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('');

    // get the initial data from the window.localStorage 
    useEffect(() => {
        const savedData = window.localStorage.getItem(name);
        if (savedData) {
            setInputValue(savedData);
        }
    }, [name]);

    // updates the current data into the window.localStorage
    const cacheData = (): void => {
        localStorage.setItem(name, inputValue);
    }

    // update the state when the user enters new data in the input
    const handleChangeInput = (element: ChangeEvent<HTMLInputElement>): void => {
        const newValue = element.target.value;
        setInputValue(newValue);
    }

    return(
        <div className="settings__input_container">
            <label className="input_container__label" htmlFor={name}>
                {label}
                <input onBlur={cacheData} onChange={handleChangeInput} placeholder={placeholder} value={inputValue} id={name} name={name} className="label__input" type="text"/>
                {checkbox ? <Check name={name+'Checkbox'}/> : null}
            </label>
            {description ? <div className="input__container_description">{description}</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
