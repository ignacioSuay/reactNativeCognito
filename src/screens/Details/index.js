import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';


export default class Details extends React.Component {

    _backOnPress = () => {
        console.log("button pressed");
        this.props.navigation.goBack();
    };

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
