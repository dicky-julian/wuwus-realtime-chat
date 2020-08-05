import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../Utils/config';
import { updateFriend, updateRooms } from '../../Redux/Actions/room';
import style from './style';

const url = 'https://pbs.twimg.com/profile_images/378800000704816685/9dc1439d939adc807ed6017093675231.jpeg';

const ChatList = (props) => {
    const navigation = useNavigation();
    // const rooms = props.rooms;
    const [rooms, setRooms] = useState(props.rooms);
    const friends = props.room.friend;
    const userId = props.user.id;

    useEffect(() => {
        const socket = io(baseUrl);
        console.log(rooms);

        socket.on('updateImage', res => {
            const dataFriends = friends;
            if (friends) {
                friends.map(friend => {
                    if (friend.id == res.id_user) {
                        const index = friends.indexOf(friend);
                        friend.image = res.image;
                        dataFriends.splice(index, 1);
                        dataFriends.push(friend);
                        props.updateFriend(dataFriends);
                    }
                })
            }
        });

        socket.on('sendingChat', res => {
            const dataRooms = rooms;
            if (rooms) {
                rooms.map(room => {
                    if (room.id == res.id) {
                        const index = rooms.indexOf(room);
                        room = {
                            ...room,
                            ...res
                        }
                        console.log(room);
                        dataRooms.splice(index, 1);
                        dataRooms.push(room);
                        props.updateRooms(dataRooms);
                        setRooms(dataRooms);
                        socket.emit('yohohoho', room);
                    }
                })
                // const room = rooms.filter(room => room.id === res.id);
                // if (room.length) {
                //     const index = room[0].indexOf(rooms);
                //     const dataRoom = room[0];
                //     dataRooms.splice(index, 1);
                //     dataRooms.push(dataRoom);
                //     props.useRoom(dataRooms);
                //     socket.emit('yohohoho', dataRooms);
                // }
            }
        });
    }, [rooms, friends])

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
                                <Text style={style.message}>{room.last_chat}</Text>
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

const mapDispathToProps = { updateFriend, updateRooms };

export default connect(mapStateToProps, mapDispathToProps)(ChatList);