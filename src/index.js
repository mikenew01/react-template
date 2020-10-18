import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import AppComponent from './App';

ReactDOM.render(
    <BrowserRouter>
        <AppComponent/>
    </BrowserRouter>, 
document.getElementById('root'));