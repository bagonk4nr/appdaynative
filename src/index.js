/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app/app.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery/dist/jquery.min.js';
import * as Popper from '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/app.css';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { initialProps: {}, rootTag: document.getElementById('root') });
