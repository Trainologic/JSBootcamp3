import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./store";
import {loadAll} from "./contactThunk";

store.dispatch(loadAll());

ReactDOM.render(
    <Provider store={store as any}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
