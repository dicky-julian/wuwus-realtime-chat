import React, { useEffect, useState } from 'react';
import { AppState, Image, PermissionsAndroid, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import io from 'socket.io-client';
import { ChatList } from '../../Components';
import style from './style';
import { setRoom, addRoom, setFetching } from '../../Redux/Actions/room';
import { setLocation } from '../../Redux/Actions/config';
import { baseUrl } from '../../Utils/config';

const Chat = (props) => {
    const [validateRoom, setValidateRoom] = useState(false);
    const [validateLocation, setValidateLocation] = useState(false);
    
    const rooms = props.room.room;
    const isFetching = props.room.isFetching;

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    position => {
                        props.setLocation(props.auth.isLogin.id, position.coords);
                    }, error => {
                        props.setLocation();
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            }
        } catch (err) {
            console.warn(err)
        }
    }

    useEffect(() => {
        const userId = props.auth.isLogin.id;

        if (!validateRoom) {
            props.setRoom(userId);
            setValidateRoom(true);
        }

        if (isFetching) {
            props.addRoom(userId);
            props.setFetching(false);
        }

        if (!validateLocation && !props.location) {
            requestLocationPermission();
            setValidateLocation(true);
        }

        AppState.addEventListener('change', state => {
            const socket = io(baseUrl);
            socket.disconnect();
            if (state === 'background') {
                if (props.location && validateLocation) {
                    props.setLocation(props.auth.isLogin.id, null);
                }
            }
        });
    })

    return (
        <>{rooms ?
            <ScrollView style={style.container}>
                <ChatList rooms={rooms} />
            </ScrollView>
            :
            <View style={style.loadingContainer}>
                <Image
                    style={style.loading}
                    source={require('../../Assets/Images/loading.gif')}
                />
            </View>
        }
        </>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    room: state.room,
    user: state.auth.isLogin,
    location: state.config.location
});

const mapDispathToProps = { setRoom, addRoom, setFetching, setLocation };

export default connect(mapStateToProps, mapDispathToProps)(Chat);