import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ErrorBoundary from './components/ErrorBoundary';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ErrorBoundary><App /></ErrorBoundary>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
