import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './src/screens/Counter';
import reducers from './src/reducers';

const store = createStore(reducers);

const App = () => {
  return(
    <Provider store = {store}>
      <Counter/>
    </Provider>
  );
}

export default App;