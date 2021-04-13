import React from 'react'
import ReactDOM from 'react-dom';

import {store} from './redux/store.js'

import App from './App.js'
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.root')
)


