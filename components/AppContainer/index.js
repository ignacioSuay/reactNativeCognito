import React from 'react';
import Login from '../../screens/Login'
import Details from '../../screens/Details'
import {StackNavigator} from 'react-navigation';

export default class AppContainer extends React.Component {

    render() {
        console.log("rerender");
        return (
            <RootStack/>
        );
    }
}

const RootStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Details: {
            screen: Details,
        }
    },
    {
        initialRouteName: 'Login',
    }
);
