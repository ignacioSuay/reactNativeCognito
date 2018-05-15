import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {Auth} from 'aws-amplify';
import {connect} from "react-redux";

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
            password: ''
        }
    }

    login = () => {
        console.log("logging");
        Auth.signIn(this.state.username, this.state.password)
            .then(user => {
                console.log(JSON.stringify(user));
                this.props.navigation.navigate('Details');
                console.log("groups " + user.signInUserSession.accessToken.payload["cognito:groups"][0]);
            })
            .catch(error => console.log(JSON.stringify(error)));

    };

    signUp = () => {
        console.log("sign up button pressed");
        this.props.navigation.navigate('SignUp');
    };

    setUserProps(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <TextInput style={styles.input} onChangeText={value => {
                        this.setUserProps("username", value)
                    }} placeholder={"Username"}/>
                    <TextInput style={styles.input} onChangeText={value => {
                        this.setUserProps("password", value)
                    }} placeholder={"Password"} secureTextEntry={true}/>
                    <Button title="Login" onPress={this.login}/>
                </View>
                <View style={styles.signUp}>
                    <Button title="Sign Up" onPress={this.signUp}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33A8FF',
        paddingTop: 30
    },
    top: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        fontSize: 20,
        width: 200,
        margin: 3,
        padding: 10
    },
    signUp: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: 30
    }

});

const mapStateToProps = (state) => {
    return {role: state.role}
};

const mapDispatchToProps = (dispatch) => ({
    change: (role) => dispatch({type: "ADD_ROLE", role: role})
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

