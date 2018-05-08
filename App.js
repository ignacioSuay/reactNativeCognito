import React from 'react';
import AppContainer from './components/AppContainer'
import reducer from './reducer';
import {createStore} from 'redux'
import {Provider} from 'react-redux';

var store = createStore(reducer);

const app = () => (

    <Provider store={store}>
        <AppContainer/>
    </Provider>
);

export default app;
