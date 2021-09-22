/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement} from 'react';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ASSETS ~~~~~*/
import configIcon from './../assets/configIcon.svg';
import './../styles/Configuration.css';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
import {FontSizes} from './FontSizes';
import {FontFamilies} from './FontFamilies';
import {FontColors} from './FontColors';
import {FontStyles} from './FontStyles';
import {GeneralSettings} from './GeneralSettings';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
//interface ComponentProps {
//}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
export const Configuration = (): ReactElement => {

    // toggles visibility of the settings menu
    const toggleSettings = (): void => {
        const settings = document.getElementById('settings');
        if (settings === null) return;
        const settingsOpenedClass = 'settings_opened';
        const isOpen = settings.classList.contains(settingsOpenedClass)
        if (isOpen) {
            settings.classList.remove(settingsOpenedClass)
        } else {
            settings.classList.add(settingsOpenedClass)
        }
    }

    return(
        <div className="config">

            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ICON ~~~~~*/}
            <div onClick={toggleSettings} className="config__icon">
                <img className="icon__svg" src={configIcon} alt="configurations"/>
            </div>

            <div id="settings" className="config__container">

                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GENERAL CONFIG ~~~~~*/}
                <GeneralSettings/>

                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FONT SIZES~~~~~*/}
                <FontSizes/>

                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FONT FAMILIES~~~~~*/}
                <FontFamilies/>

                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FONT FAMILIES~~~~~*/}
                <FontStyles/>

                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FONT FAMILIES~~~~~*/}
                <FontColors/>

            </div>
        </div>
    );
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/
