import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import StateStore from './state/StateStore';

let state = StateStore.getInstance();
state.set('myStateKey', 'My State IS SOOOO COOOOL');

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
