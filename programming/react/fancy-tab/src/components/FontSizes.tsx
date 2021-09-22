/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement, useContext} from 'react';
import ConfigContext from './ConfigContext';
import {NumberSelect} from './NumberSelect';
import {Settings} from './Settings';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const FontSizes = () :ReactElement => {
    const {config, setConfigValue} = useContext(ConfigContext);

    return(
        <Settings title="Fonts Sizes">
            <NumberSelect
                key="timeSize"
                label="Time"
                name="--fs"
                section="time"
                config={config}
                setConfigValue={setConfigValue}
            />
            <NumberSelect
                key="dateSize"
                label="Date"
                name="--fs"
                section="date"
                config={config}
                setConfigValue={setConfigValue}
            />
            <NumberSelect
                key="descriptionSize"
                label="Description"
                name="--fs"
                section="description"
                config={config}
                setConfigValue={setConfigValue}
            />
            <NumberSelect
                key="weatherSize"
                label="Weather"
                name="--fs"
                section="weather"
                config={config}
                setConfigValue={setConfigValue}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
