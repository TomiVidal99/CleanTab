/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement} from 'react';
import {Select} from './Select';
import {Settings} from './Settings';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const FontStyles = () :ReactElement => {
    return(
        <Settings title="Fonts Styles">
            <Select
                key="timeFamilies"
                label="Time"
                name="timeFamilies"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
            />
            <Select
                key="dateFamilies"
                label="Date"
                name="dateFamilies"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
            />
            <Select
                key="descriptionFamilies"
                label="Description"
                name="descriptionFamilies"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
            />
            <Select
                key="weatherFamilies"
                label="Weather"
                name="weatherFamilies"
                options={[
                    'normal',
                    'italic',
                    'bold'
                ]}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
