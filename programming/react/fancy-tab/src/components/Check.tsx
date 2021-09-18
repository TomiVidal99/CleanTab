/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
interface ComponentProps {
    name: string,
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const Check = ({name}: ComponentProps): ReactElement => {
    const [inputValue, setInputValue] = useState(false);

    //updates the change of the input
    const handleInputChange = (element: ChangeEvent<HTMLInputElement>): void => {
        const newValue = element.target.checked;
        setInputValue(newValue);
        handleCacheData(newValue);
    }

    // loads the cached data
    useEffect(() => {
        const cachedData = window.localStorage.getItem(name);
        if (cachedData) {
            setInputValue(cachedData === "true" ? true : false);
        }
    }, [name]);

    // saves data into window.localStorage
    const handleCacheData = (newValue: boolean): void => {
        window.localStorage.setItem(name, (newValue).toString());
    }

    return(
        <input className="checkbox" onChange={handleInputChange} checked={inputValue} type="checkbox" name={name} id={name} />
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
