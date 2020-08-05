import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Alert } from '../../Components';
// assets
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../Assets/Styles';
// action
import { register } from '../../Utils/Api';
import { setLogin } from '../../Redux/Actions/auth';
import { setLoading, setError } from '../../Redux/Actions/config';

const Auth = (props) => {
    const [action, setAction] = useState(0);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        props.setLoading(true);
        if (!username || !password) {
            props.setError(`Username and Password can't be empty`);
            props.setLoading(false);
        } else {
            props.setLogin(username, password);
        }
    }

    const handleRegister = () => {
        props.setLoading(true);
        if (!fullname || !username || !password) {
            props.setError(`Fullname, Username and Password can't be empty`);
            props.setLoading(false);
        } else {
            register(fullname, username, password).then(res => {
                if (res) props.setError(`Succesfully created account, Please login to continue`, 'success');
                else props.setError(`Invalid Input`);
                props.setLoading(false);
            })
        }
    }

    return (
        <>
            <ScrollView style={style.container}>
                <Image
                    style={style.headerImage}
                    source={require('../../Assets/Images/header_login.png')}
                />
                <View style={style.formContainer}>
                    <Text style={style.headerText}>Connect</Text>
                    <Text style={style.headerText}>your Relationship</Text>

                    {action ?
                        <><Text style={style.label}>Fullname</Text>
                            <TextInput
                                style={style.formInput}
                                placeholder='Insert your fullname'
                                placeholderTextColor={color.default}
                                onChangeText={text => setFullname(text)}
                                value={fullname} /></> : <></>
                    }

                    <Text style={style.label}>Username</Text>
                    <TextInput
                        style={style.formInput}
                        placeholder='Insert your username'
                        placeholderTextColor={color.default}
                        onChangeText={text => setUsername(text)}
                        value={username} />

                    <Text style={style.label}>Password</Text>
                    <TextInput
                        style={style.formInput}
                        placeholder='Insert your password'
                        placeholderTextColor={color.default}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry={true} />

                    {action ?
                        <TouchableOpacity style={style.bt} onPress={() => handleRegister()}>
                            <Text style={style.btLabel}>Register</Text>
                            {props.config.isLoading ?
                                <ActivityIndicator size="small" color={color.dark} />
                                :
                                <Ionicons name="arrow-forward-outline" size={24} color={color.dark} />}
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={style.bt} onPress={() => handleLogin()}>
                            <Text style={style.btLabel}>Login</Text>
                            {props.config.isLoading ?
                                <ActivityIndicator size="small" color={color.dark} />
                                :
                                <Ionicons name="arrow-forward-outline" size={21} color={color.dark} />}
                        </TouchableOpacity>
                    }

                    <TouchableOpacity onPress={() => setAction(!action)}>
                        <Text style={style.endLabel}>{action ? 'Already have an account ? Sign In' : 'Have no account ? Sign Up'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {props.config.isError ? <Alert type={props.config.isError.type} message={props.config.isError.message} onPress={() => props.setError()} /> : <></>}
        </>
    )
}

const mapStateToProps = state => ({
    config: state.config
});

const mapDispathToProps = { setLogin, setLoading, setError };

export default connect(mapStateToProps, mapDispathToProps)(Auth);