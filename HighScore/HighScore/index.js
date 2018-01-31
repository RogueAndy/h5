import { AppRegistry } from 'react-native';
import App from './App';
import RNHighScores from './ViewControllers/RNHighScores';
import RMainScreen from './ViewControllers/RMainScreen';
import RAnimated from './ViewControllers/RAnimated';
import RLoginViewController from './ViewControllers/RLoginViewController';

AppRegistry.registerComponent('HighScore', () => RLoginViewController);
