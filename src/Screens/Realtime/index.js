import React, { Component } from 'react';
import { Text } from 'react-native';
import io from 'socket.io-client';
import { baseUrl } from '../../Utils/config';

class Realtime extends Component {
    componentDidMount() {
        this.socket = io(baseUrl);
        this.socket.on('updateImage', res => {
            console.log(res);
        })
    }

    componentWillUnmount() {
        this.socket.disconnect();
    }

    render() {
        return (
            <Text>Real Time</Text>
        )
    }
}

export default Realtime;