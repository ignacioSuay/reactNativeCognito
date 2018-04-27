import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.username = "";
        this.password = "";
    }

    _handleTextChange = event => {
        this.username = event.nativeEvent.text;
        console.log("the username is " + this.username);
    };

    _loginOnPress = event => {
        console.log("button pressed")
    };

    render() {
        console.log("rerender");
        return (
            <View style={styles.container}>
                <Text>Username:</Text>
                <TextInput style={styles.input} onSubmitEditing={this._handleTextChange}/>
                <Button title="Login" onPress={this._loginOnPress}/>
            </View>
        );
    }
}

const sum = function (a, b) {
    return a + b;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        width: 250
    }
});
