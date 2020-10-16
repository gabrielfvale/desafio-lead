import { combineReducers } from 'redux';

import configuration from './configuration';
import theme from './theme';

export default combineReducers({
  configuration,
  theme
});
