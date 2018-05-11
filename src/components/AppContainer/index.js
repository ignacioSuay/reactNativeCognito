import React from 'react';
import Login from '../../components/Login'
import SignUp from '../../components/SignUp'
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
        SignUp: {
            screen: SignUp,
        },
        Details: {
            screen: Details,
        }

    },
    {
        initialRouteName: 'Login',
    }
);
