/**
 * Created by harry on 20/07/2017.
 */

import {AppRegistry} from 'react-native';
import App from './App';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}
AppRegistry.registerComponent('ShopCart', () => App);