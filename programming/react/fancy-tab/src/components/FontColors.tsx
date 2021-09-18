/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement} from 'react';
import {ColorSelect} from './ColorSelect';
import {Settings} from './Settings';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const FontColors = () :ReactElement => {
    return(
        <Settings title="Fonts Colors">
            <ColorSelect
                key="timeColors"
                label="Time"
                name="timeColors"
            />
            <ColorSelect
                key="dateColors"
                label="Date"
                name="dateColors"
            />
            <ColorSelect
                key="descriptionColors"
                label="Description"
                name="descriptionColors"
            />
            <ColorSelect
                key="weatherColors"
                label="Weather"
                name="weatherColors"
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
