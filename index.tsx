import {AppRegistry} from 'react-native';
import App from './src/App';
import appInfo from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appInfo.name, () => App);
