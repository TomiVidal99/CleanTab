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
        <TimeDisplay timeStyle={userConfig ? userConfig.styles.time : defaultStyles.time} dateStyle={userConfig ? userConfig.styles.date : defaultStyles.date} descriptionStyle={userConfig ? userConfig.styles.description : defaultStyles.description} locale="es-AR" />
        <Weather style={userConfig ? userConfig.styles.weather : defaultStyles.weather} />
        <Configuration/> 
        <Background style={userConfig ? userConfig.styles.background : defaultStyles.background} />
    </div>
  );
}

const defaultStyles = {
    time: {
        fs: '40px',
        ff: 'Arial',
        fst: 'italic',
        color: 'black'
    },
    date: {
        fs: '20px',
        ff: 'Arial',
        fst: 'italic',
        color: 'dimgray'
    },
    description: {
        fs: '14px',
        ff: 'Arial',
        fst: 'italic',
        color: 'gray'
    },
    weather: {
        fs: '14px',
        ff: 'Arial',
        fst: 'italic',
        color: 'gray'
    },
    background: {
        background: 'lightgray'
    }
}

export default App;
