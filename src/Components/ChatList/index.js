import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
// import io from 'socket.io-client';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../Utils/config';
import style from './style';

const url = 'https://pbs.twimg.com/profile_images/378800000704816685/9dc1439d939adc807ed6017093675231.jpeg';

const ChatList = (props) => {
    const navigation = useNavigation();
    const rooms = props.rooms;
    const userId = props.user.id;

    return (
        <>
            {rooms.length ? rooms.map((room, key) => {
                const messageStatus = room.user1 === userId ? room.status === 3 ? true : false : room.status === 2 ? true : false;

                return (
                    <TouchableOpacity style={style.chatContainer} onPress={() => navigation.navigate('Room', { room: room })} key={key}>
                        <Image
                            style={style.chatAvatar}
                            source={{ uri: room.friendImage ? `${baseUrl}/images/${room.friendImage}` : url }}
                        />
                        <View style={style.chat}>
                            <View style={style.chatView}>
                                <Text style={style.username}>{room.friendName}</Text>
                                <Text style={style.message}>{room.message}</Text>
                            </View>
                            {messageStatus ? <View style={style.indicator} /> : <></>}
                        </View>
                    </TouchableOpacity>
                )
            }) : <></>
            }
        </>
    )
}

const mapStateToProps = state => ({
    user: state.auth.isLogin,
    room: state.room
});

export default connect(mapStateToProps)(ChatList);