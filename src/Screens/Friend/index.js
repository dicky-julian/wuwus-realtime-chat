import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Modal, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { Alert, List } from '../../Components';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../Assets/Styles';
import { addFriend } from '../../Redux/Actions/room';
import { setLoading, setError } from '../../Redux/Actions/config';
import { baseUrl } from '../../Utils/config';

const Friend = (props) => {
    const [codeUser, setCodeUser] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const friendList = props.friend;

    const handleSubmitCode = () => {
        if (!codeUser) {
            props.setError(`Code User can't be empty`);
            return;
        }
        props.setLoading(true);
        props.addFriend(props.user.id, codeUser);
        setModalVisible(false);
    }

    // useEffect(() => {
    //     const socket = io(baseUrl);
    //     socket.on('updateImage', res => {
    //         console.log(res);
    //     })
    //     return () => {
    //         socket.disconnect();
    //     }
    // }, [])

    return (
        <>
            {friendList.length ?
                <ScrollView style={style.container}>
                    {friendList.map((friend, key) => (
                        <TouchableOpacity key={key}>
                            <List data={friend} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                :
                <View style={style.loadingContainer}>
                    <Image
                        style={style.loading}
                        source={require('../../Assets/Images/loading.gif')}
                    />
                </View>
            }
            <TouchableOpacity style={style.buttonAdd} onPress={() => setModalVisible(true)}>
                <Ionicons name="person-add" size={20} color={color.light} />
            </TouchableOpacity>
            <Modal animationType='fade' transparent={true} visible={modalVisible} onPress={() => setModalVisible(false)}>
                <TouchableOpacity style={style.modalClose} onPress={() => setModalVisible(false)} />
                <View style={style.modalContainer}>
                    <Text style={style.value}>Insert friend's user id, Example: #ABC123QRZ</Text>
                    <TextInput style={style.modalInput} value={codeUser} onChangeText={text => setCodeUser(text)} />
                    <View style={style.modalAction}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}><Text style={style.modalButton}>Cancel</Text></TouchableOpacity>
                        {props.config.isLoading ?
                            <ActivityIndicator size="small" color={color.dark} />
                            :
                            <TouchableOpacity onPress={() => handleSubmitCode()}><Text style={style.modalButton}>Save</Text></TouchableOpacity>}
                    </View>
                </View>
            </Modal>
            {props.config.isError ? <Alert type={props.config.isError.type} message={props.config.isError.message} onPress={() => props.setError()} /> : <></>}
        </>
    )
}

const mapStateToProps = state => ({
    config: state.config,
    user: state.auth.isLogin,
    friend: state.room.friend
});

const mapDispathToProps = { addFriend, setLoading, setError };

export default connect(mapStateToProps, mapDispathToProps)(Friend);