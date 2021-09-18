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
export const FontFamilies = () :ReactElement => {
    return(
        <Settings title="Fonts Families">
            <Select
                key="timeFamilies"
                label="Time"
                name="timeFamilies"
                options={[
                    'Arial',
                    'serif-sans'
                ]}
            />
            <Select
                key="dateFamilies"
                label="Date"
                name="dateFamilies"
                options={[
                    'Arial',
                    'serif-sans'
                ]}
            />
            <Select
                key="descriptionFamilies"
                label="Description"
                name="descriptionFamilies"
                options={[
                    'Arial',
                    'serif-sans'
                ]}
            />
            <Select
                key="weatherFamilies"
                label="Weather"
                name="weatherFamilies"
                options={[
                    'Arial',
                    'serif-sans'
                ]}
            />
        </Settings>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
