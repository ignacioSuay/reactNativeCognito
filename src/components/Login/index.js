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
        console.log("button pressed");
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
                <TextInput style={styles.input} onChangeText={value => {
                    this.setUserProps("username", value)
                }} placeholder={"Username"}/>
                <TextInput style={styles.input} onChangeText={value => {
                    this.setUserProps("password", value)
                }} placeholder={"Password"} secureTextEntry={true}/>
                <Button title="Login" onPress={this.login}/>
                <Button title="Sign Up" onPress={this.signUp}/>

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

