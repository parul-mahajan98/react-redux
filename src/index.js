/*jshint esversion:6 */
import React from 'react';

import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { createBrowserHistory } from 'history';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

export const history = createBrowserHistory({ forceRefresh: true });

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();

export * from './vehicle/vehicleActions';