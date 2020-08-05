import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Alert = (props) => {
    const background = props.type === 'success' ? '#01c851':'#ef5454';
    return (
        <TouchableOpacity style={{...style.container, backgroundColor: background,}} onPress={props.onPress}>
            <Text style={style.message}>{props.message || ''}</Text>
            <Ionicons name="close-circle" size={24} color='#fff' />
        </TouchableOpacity>
    )
}

export default Alert;