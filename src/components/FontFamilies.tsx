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
export const FontFamilies = () :ReactElement => {
    const {config, setConfigValue} = useContext(ConfigContext);
    return(
        <Settings title="Fonts Families">
            <Select
                key="timeFamilies"
                label="Time"
                name="--ff"
                section="time"
                options={[
                    'Arial',
                    'serif-sans',
                    '"Chivo"',
                    '"Segoe UI"',
                    'Tahoma',
                    'Geneva',
                    'Verdana'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
            <Select
                key="dateFamilies"
                label="Date"
                name="--ff"
                section="date"
                options={[
                    'Arial',
                    'serif-sans',
                    '"Chivo"',
                    '"Segoe UI"',
                    'Tahoma',
                    'Geneva',
                    'Verdana'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
            <Select
                key="descriptionFamilies"
                label="Description"
                section="description"
                name="--ff"
                options={[
                    'Arial',
                    'serif-sans',
                    '"Chivo"',
                    '"Segoe UI"',
                    'Tahoma',
                    'Geneva',
                    'Verdana'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
            <Select
                key="weatherFamilies"
                label="Weather"
                section="weather"
                name="--ff"
                options={[
                    'Arial',
                    'serif-sans',
                    '"Chivo"',
                    '"Segoe UI"',
                    'Tahoma',
                    'Geneva',
                    'Verdana'
                ]}
                config={config}
                setConfigValue={setConfigValue}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
