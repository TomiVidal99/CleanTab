/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement, useContext} from 'react';
import ConfigContext from './ConfigContext';
import {Select} from './Select';
import {Settings} from './Settings';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const FontStyles = () :ReactElement => {
    const {config, setConfigValue} = useContext(ConfigContext);
    return(
        <Settings title="Fonts Styles">
            <Select
                key="timeStyles"
                label="Time"
                section="time"
                name="--fst"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
            <Select
                key="dateStyles"
                label="Date"
                section="date"
                name="--fst"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
            <Select
                key="descriptionStyles"
                label="Description"
                section="description"
                name="--fst"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
            <Select
                key="weatherStyles"
                label="Weather"
                section="weather"
                name="--fst"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
