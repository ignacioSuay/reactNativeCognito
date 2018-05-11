import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';


export default class Details extends React.Component {

    _backOnPress = () => {
        console.log("button pressed");
        this.props.navigation.goBack();
    };

    // _loginAsAdmin = () => {
    //     fetch('https://q7eze12knl.execute-api.eu-west-1.amazonaws.com/prod/persons/2')
    //         .then(response => response.json())
    //         .then(responseJson => {
    //             console.log(responseJson);
    //             this.props.change(responseJson.name.S);
    //         }).catch(error => {
    //         console.log(error)
    //     });
    // };

    render() {
        console.log("details loading...");
        return (
            <View>
                <Text>Ueeeeee</Text>
                <Button title="Back" onPress={this._backOnPress}/>
            </View>

        );
    }
}
