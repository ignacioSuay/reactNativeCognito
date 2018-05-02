import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.username = "";
        this.password = "";
    }

    static navigationOptions = {
        title: 'Log in',
        headerStyle: {
            backgroundColor: '#2b80c4'
        }
    };

    _handleUsername = event => {
        this.username = event.nativeEvent.text;
    };

    _handlePassword = event => {
        this.password = event.nativeEvent.text;
    };

    _loginOnPress = () => {
        console.log("button pressed");
        this.props.navigation.navigate('Details');
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onSubmitEditing={this._handleUsername} placeholder={"Username"}/>
                <TextInput style={styles.input} onSubmitEditing={this._handlePassword} placeholder={"Password"}/>
                <Button title="Login" onPress={this._loginOnPress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33A8FF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30
    },
    top: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        margin: 30
    },
    input: {
        fontSize: 20,
        width: 200,
        margin: 3,
        padding: 10
    }
});
