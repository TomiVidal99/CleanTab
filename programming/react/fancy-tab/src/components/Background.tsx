/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {CSSProperties, ReactElement, useContext, useEffect, useState} from 'react';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ASSETS ~~~~~*/
import './../styles/Background.css';
import ConfigContext from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
const KEY_LENGTH = 56;
export const Background = (): ReactElement => {
    const {config} = useContext(ConfigContext);
    const [randomBackground, setRandomBackground] = useState<string | null>(null);

    // retrieves array of backgrounds urls and sets a random one as the state
    const getRandomBackground = (backgrounds: string[]): void => {

        if (config.general.key.length !== KEY_LENGTH) return;

        if (!config.general.queryCheckbox || config.general.query === '') {
            //if the background has been set to not be display remove the current url from the state
            if (randomBackground === null) return;
            setRandomBackground(null);
        }

        //useBackground(config.general.query);

    }

    return(
        <div 
            style={randomBackground ? randomBackground : (config.background as CSSProperties)}
            className="background">
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
