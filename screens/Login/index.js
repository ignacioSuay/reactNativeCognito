import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {connect} from "react-redux";
import {Auth} from 'aws-amplify';

class Login extends React.Component {

    static navigationOptions = {
        title: 'Log in!',
        headerStyle: {
            backgroundColor: '#2b80c4'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    _loginOnPress = () => {
        console.log("button pressed");
        this.props.navigation.navigate('Details');
    };

    setUserProps(key, value) {
        this.setState({
            [key]: value
        })
    }

    signUp() {
        console.log(JSON.stringify(this.state))
        Auth.signUp({
            username: this.state.username,
            password: this.state.password,
            attributes: {
                email: this.state.email
            }
        })
            .then(data => console.log(data))
            .catch(error => console.log(error));

    }

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
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={value => {
                    this.setUserProps("username", value)
                }} placeholder={"Username"}/>
                <TextInput style={styles.input} onChangeText={value => {
                    this.setUserProps("password", value)
                }} placeholder={"Password"}/>
                <TextInput style={styles.input} onChangeText={value => {
                    this.setUserProps("email", value)
                }} placeholder={"Email"}/>
                <Button title="Login" onPress={this._loginOnPress}/>
                <Button title="Sign up!" onPress={this.signUp.bind(this)}/>

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

const mapStateToProps = (state) => {
    return {role: state.role}
};

const mapDispatchToProps = (dispatch) => ({
    change: (role) => dispatch({type: "ADD_ROLE", role: role})
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
