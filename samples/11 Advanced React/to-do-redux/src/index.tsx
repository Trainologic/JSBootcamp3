import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';

import rootReducer from './state/reducers'

import * as Redux from 'redux';

const store = Redux.createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
