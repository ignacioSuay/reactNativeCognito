import React from 'react';
import AppContainer from './components/AppContainer'
import reducer from './reducer';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
const store = createStore(reducer);

const app = () => (

    <Provider store={store}>
        <AppContainer/>
    </Provider>
);

export default app;
