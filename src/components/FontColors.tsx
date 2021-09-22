/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement, useContext} from 'react';
import {ColorSelect} from './ColorSelect';
import ConfigContext from './ConfigContext';
import {Settings} from './Settings';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const FontColors = () :ReactElement => {
    const {config, setConfigValue} = useContext(ConfigContext);

    return(
        <Settings title="Fonts Colors">
            <ColorSelect
                key="timeColors"
                label="Time"
                name="--fc"
                section="time"
                config={config}
                setConfigValue={setConfigValue}
            />
            <ColorSelect
                key="dateColors"
                label="Date"
                name="--fc"
                section="date"
                config={config}
                setConfigValue={setConfigValue}
            />
            <ColorSelect
                key="descriptionColors"
                label="Description"
                name="--fc"
                section="description"
                config={config}
                setConfigValue={setConfigValue}
            />
            <ColorSelect
                key="weatherColors"
                label="Weather"
                section="weather"
                name="--fc"
                config={config}
                setConfigValue={setConfigValue}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
