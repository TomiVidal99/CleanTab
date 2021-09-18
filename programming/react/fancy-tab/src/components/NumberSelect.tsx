/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    label: string,
    name: string,
    description?: ReactElement
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DEFAULT VALUES ~~~~~*/
const defaultValues = {
    inputDefault: '1',
    inputMax: "10",
    inputMin: "0.1",
    inputStep: "0.1"
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const NumberSelect = ({label, name, description}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState(defaultValues.inputDefault);

    // gets the saves data on window.localStorage
    useEffect(() => {
        const cachedData = window.localStorage.getItem(name);
        if (cachedData) {
            setInputValue(cachedData);
        }
    }, [name]);

    // save the current data of the input to window.localStorage
    const handleCacheData = (): void => {
        window.localStorage.setItem(name, inputValue);
    }

    // updates input value on change
    const handleInputChange = (element: ChangeEvent<HTMLInputElement>): void => {
        const newValue = element.target.value;
        setInputValue(newValue);
    }

    return(
        <div className="settings__input_container">
            <label htmlFor={name} className="input_container__label number_select">
                {label}
                <input onBlur={handleCacheData} onChange={handleInputChange} value={inputValue} max={defaultValues.inputMax} min={defaultValues.inputMin} step={defaultValues.inputStep} name={name} id={name} type="number" className="label__input"/>
            </label>
            {description ? <div className="input__container_description">{description}</div> : null}
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
