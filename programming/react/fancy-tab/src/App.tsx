/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/
import {ReactElement} from 'react';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ STYLE ~~~~~*/
import './styles/App.css';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~
import {TimeDisplay} from './components/TimeDisplay';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MODULES ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COMPONENTS ~~~~~*/
import {Weather} from './components/Weather';
import {Configuration} from './components/Configuration';
import {Background} from './components/Background';
import {useConfig} from './hooks/useConfig';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TYPES ~~~~~*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTION ~~~~~*/
const App = (): ReactElement => {
    const [userConfig, setUserConfig] = useConfig();


    return (
    <div className="app">
        <h1>HELLO WORLD</h1>
        <TimeDisplay timeStyle={userConfig ? userConfig.styles.time : defaultStyles.time} dateStyle={userConfig ? userConfig.styles.date : defaultStyles.date} descriptionStyle={userConfig ? userConfig.styles.description : defaultStyles.description} locale="es-AR" />
        <Weather weatherStyle={userConfig ? userConfig.styles.weather : defaultStyles.weather} />
        <Configuration/>
        <Background/>
    </div>
  );
}

const defaultStyles = {
    time: {
        fs: '40px',
        ff: 'Arial',
        fst: 'italic',
        color: 'red'
    },
    date: {
        fs: '20px',
        ff: 'Arial',
        fst: 'italic',
        color: 'limegreen'
    },
    description: {
        fs: '14px',
        ff: 'Arial',
        fst: 'italic',
        color: 'blue'
    },
    weather: {
        fs: '14px',
        ff: 'Arial',
        fst: 'italic',
        color: 'blue'
    }
}

export default App;
