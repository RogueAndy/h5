import { AppRegistry } from 'react-native';
import App from './App';
import TheLastApp from './TheLastApp';
import study_state from './rnstudy/study_state';
import study_css from './rnstudy/study_css';
import Flexbox from './rnstudy/Flexbox';
import study_textinput from './rnstudy/study_textinput';
import study_scroll from './rnstudy/study_scroll';
import study_fetch from './rnstudy/study_fetch';

AppRegistry.registerComponent('rn', () => study_fetch);
