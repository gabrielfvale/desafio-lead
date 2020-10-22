import { combineReducers } from 'redux';

import configuration from './configuration';
import theme from './theme';
import genres from './genres';

export default combineReducers({
  configuration,
  theme,
  genres
});
