import React, { useEffect, useState, useRef } from 'react';
import { Image, ImageBackground, Keyboard, Modal, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

import { Chat, Topbar } from '../../Components';

import { baseUrl } from '../../Utils/config';
import { getUserById, getChatByRoom, addChat } from '../../Utils/Api';
import { setReadChat } from '../../Redux/Actions/room';

import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../Assets/Styles';

const url = 'https://pbs.twimg.com/profile_images/378800000704816685/9dc1439d939adc807ed6017093675231.jpeg';

const Room = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [position, setPosition] = useState(0);
    const [image, setImage] = useState();
    const [chat, setChat] = useState(null);
    const [friend, setFriend] = useState();
    const [rooms, setRooms] = useState(props.route.params.room);
    const [message, setMessage] = useState();
    const { id, id_friend } = rooms;
    const scrollViewRef = useRef();

    const navigation = useNavigation();
    const keyboardWillShow = e => setPosition(e.endCoordinates.height);
    const keyboardWillHide = () => setPosition(0);

    const handlePickImage = () => {
        const options = {
            noData: true,
        }
        ImagePicker.showImagePicker(options, res => {
            if (res.uri) setImage(res);
            setModalVisible(true)
        })
    }

    const submitMessage = () => {
        if (message) {
            const data = {
                id_room: id,
                id_user: props.user.id,
                type: 'text',
                message: message
            }
            addChat(data).then(res => {
                if (res) setMessage('');
                Keyboard.dismiss();
            })
        }
    }

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', (e) => keyboardWillShow(e));
        Keyboard.addListener('keyboardDidHide', () => keyboardWillHide());

        if (!friend) {
            getUserById(id_friend).then(res => {
                setFriend(res.data[0])
            })
        }

        if (chat === null) {
            getChatByRoom(id).then(res => {
                if (res) setChat(res.data);
                else setChat('');
            })
        }
    });

    useEffect(() => {
        const socket = io(baseUrl);

        if (friend) {
            socket.on('updateStatus', res => {
                setFriend({
                    ...friend,
                    location: res.status
                })
            });
        }

        socket.on('addChat', res => {
            if (chat && id == res.id_room) {
                setChat([
                    ...chat,
                    res
                ])
            }
        });
    }, [chat, friend])

    useEffect(() => {
        const userId = props.user.id;
        const statusSample = userId === rooms.user1 ? 3 : 2;
        if (rooms.status === statusSample) {
            props.setReadChat(id, 4);
        }
    }, [rooms])

    return (
        <>
            {friend ?
                <View>
                    <Topbar previous={true}>
                        <TouchableOpacity style={style.profileContainer} onPress={() => navigation.navigate('FriendDetail', { id: id_friend })}>
                            <Image
                                source={{ uri: friend.image ? `${baseUrl}/images/${friend.image}` : url }}
                                style={style.profileImage}
                            />
                            <View>
                                <Text style={style.profileName}>{friend.fullname}</Text>
                                <Text style={{ fontSize: 15, color: color.light }}>{friend.location ? 'Online' : `last seen at ${moment(friend.updated_at).format('ddd HH:mm')}`}</Text>
                            </View>
                        </TouchableOpacity>
                    </Topbar>
                    <View >
                        {chat ?
                            <ScrollView
                                style={style.container}
                                ref={scrollViewRef}
                                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                                <View style={{ marginBottom: 15 }}>
                                    {chat.map((item, key) => (
                                        <Chat
                                            key={key}
                                            self={props.user.id === item.id_user ? true : false}
                                            status={true}
                                            message={item.message}
                                            date={item.created_at}
                                            isStart={item.message ? false : true}
                                        />
                                    ))}
                                </View>
                            </ScrollView>
                            :
                            <View style={style.container}>
                                <Chat isStart={true} />
                            </View>

                        }
                        <View style={{ ...style.inputContainer, bottom: position }}>
                            <View style={style.modalInput}>
                                <TextInput style={style.input} onChangeText={text => setMessage(text)} value={message} />
                                <TouchableOpacity onPress={() => handlePickImage()}><Ionicons name="camera" size={23} color='#8a8a8a' /></TouchableOpacity>
                            </View>
                            <TouchableOpacity style={style.submitButton} onPress={() => submitMessage()}>
                                <Ionicons name="send" size={15} style={{ alignSelf: 'center' }} color={color.light} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    {image ?
                        <Modal animationType='fade' transparent={false} visible={modalVisible} onPress={() => setModalVisible(false)}>
                            <View style={{ backgroundColor: color.dark }}>
                                <ImageBackground
                                    source={{ uri: image.uri }}
                                    style={style.uploadImage}
                                    resizeMode='contain'>
                                    <TouchableOpacity style={style.uploadBack} onPress={() => setModalVisible(false)}>
                                        <Ionicons name="arrow-back-outline" size={25} color={color.light} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={style.uploadImageSubmit}>
                                        <Ionicons name="send" size={15} style={{ alignSelf: 'center' }} color={color.light} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        :
                        <></>
                    }
                </View>
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
    user: state.auth.isLogin
});

const mapDispathToProps = { setReadChat };

export default connect(mapStateToProps, mapDispathToProps)(Room);