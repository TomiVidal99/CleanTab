/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement} from 'react';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STYLE ~~~~~*/
import './styles/App.css';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
import {Weather} from './components/Weather';
import {Configuration} from './components/Configuration';
import {Background} from './components/Background';
import {TimeDisplay} from './components/TimeDisplay';
import {ConfigProvider} from './components/ConfigProvider';
import {WeatherProvider} from './components/WeatherProvider';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
const App = (): ReactElement => {
    return (
        <div className="app">
            <ConfigProvider>
                <WeatherProvider>
                    <TimeDisplay/>
                    <Weather/>
                </WeatherProvider>
                <Configuration /> 
                <Background/>
            </ConfigProvider>
        </div>
  );
}

export default App;
