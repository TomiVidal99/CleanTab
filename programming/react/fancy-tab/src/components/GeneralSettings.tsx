/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {Fragment, ReactElement} from 'react';
import {InputData} from './InputData';
import {Select} from './Select';
import {Settings} from './Settings';
import {CheckSelect} from './CheckSelect';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const GeneralSettings = () :ReactElement => {
    return(
        <Settings title="General Settings">
            <Select
                key="language"
                label="Language"
                options={["en-US", "es-AR"]}
                name="language"
            />
            <InputData 
                key="apiKey"
                label="API KEY"
                name="apiKey"
                placeholder="Get your api key and paste it here"
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
                label="Background query"
                name="apiQuery"
                placeholder="Search the picture that you want as background"
                checkbox={true}
                description={<Fragment>Get dynamic background images by entering one or more keywords</Fragment>}
            />
            <InputData
                key="backgroundColor"
                label="Background color"
                name="backgroundColor"
                placeholder="Enter a color, i.e: limegreen, or #ddd"
            />
            <InputData
                key="weatherLocation"
                label="Weather Location"
                name="weatherLocation"
                placeholder="Enter a location to get weather data"
                description={<Fragment>We don't want to track peoples data, so if you want to get weather information enter your location or somewhere close to you, else no weather data won't be showed</Fragment>}
                checkbox={true}
            />
            <CheckSelect
                label="Weather description"
                name="weatherActive"
            />
            <Select
                key="dateFormat"
                label="Date"
                options={[
                    "automatic",
                    "dd/mm/yy",
                    "dd/mm/yyyy",
                    "dd/mm",
                ]}
                name="dateFormat"
                checkbox={true}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

