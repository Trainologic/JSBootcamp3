import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store} from "./store";
import {Provider} from "react-redux";
import {loadAllCounters} from "./actions";

store.dispatch(loadAllCounters());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
