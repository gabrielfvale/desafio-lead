import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './routes';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
};

export default App;
