/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Top from './src/components/pages/Top';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Top);
