/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {Fragment, ReactElement, useContext} from 'react';
import {InputData} from './InputData';
import {Select} from './Select';
import {Settings} from './Settings';
import {CheckSelect} from './CheckSelect';
import ConfigContext from './ConfigContext';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
const section = 'general';
export const GeneralSettings = () :ReactElement => {
    const {config, setConfigValue} = useContext(ConfigContext);
    return(
        <Settings title="General Settings">
            <Select
                key="language"
                label="Language"
                section={section}
                options={["en-US", "es-AR"]}
                name="locale"
                config={config}
                setConfigValue={setConfigValue}
            />
            <InputData 
                key="apiKey"
                label="API KEY"
                name="key"
                placeholder="Get your api key and paste it here"
                section={section}
                config={config}
                setConfigValue={setConfigValue}
                description={
                    <Fragment>
                        <Fragment>Get your key from</Fragment>
                        <a 
                            className="description_link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.pexels.com/api/new/"
                        >
                            https://www.pexels.com/api/new/
                        </a>
                    </Fragment>
                }
            />
            <InputData
                key="apiQuery"
                section={section}
                label="Background query"
                name="query"
                placeholder="Search the picture that you want as background"
                checkbox={true}
                description={<Fragment>Get dynamic background images by entering one or more keywords</Fragment>}
                config={config}
                setConfigValue={setConfigValue}
            />
            <InputData
                key="backgroundColor"
                label="Background color"
                name="background"
                section={section}
                placeholder="Enter a color, i.e: limegreen, or #ddd"
                config={config}
                setConfigValue={setConfigValue}
            />
            <InputData
                key="weatherLocation"
                label="Weather Location"
                name="location"
                placeholder="Enter a location to get weather data"
                description={<Fragment>We don't want to track peoples data, so if you want to get weather information enter your location or somewhere close to you, else no weather data won't be showed</Fragment>}
                checkbox={true}
                config={config}
                setConfigValue={setConfigValue}
                section={section}
            />
            <CheckSelect
                label="Weather description"
                name="weatherDescriptionCheckbox"
                config={config}
                setConfigValue={setConfigValue}
                section={section}
                checkbox={true}
            />
            <Select
                key="dateFormat"
                label="Date"
                section="general"
                options={[
                    "automatic",
                    "dd/mm/yy",
                    "dd/mm/yyyy",
                    "dd/mm",
                ]}
                name="dateFormat"
                checkbox={true}
                config={config}
                setConfigValue={setConfigValue}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

