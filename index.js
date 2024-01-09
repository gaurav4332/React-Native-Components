/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import CustomToastScreen from './src/srcCustomToast/App';

AppRegistry.registerComponent(appName, () => CustomToastScreen);
