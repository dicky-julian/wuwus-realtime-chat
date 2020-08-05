import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../Utils/config';
import style from './style';

const url = 'https://pbs.twimg.com/profile_images/378800000704816685/9dc1439d939adc807ed6017093675231.jpeg';

const ChatList = (props) => {
    const navigation = useNavigation();
    const data = props.data;
    return (
        <TouchableOpacity style={style.listContainer} onPress={() => navigation.navigate('FriendDetail', {id: data.id})}>
            <Image
                style={style.listAvatar}
                source={{ uri: data.image ? `${baseUrl}/images/${data.image}` : url }}
            />
            <View style={style.list}>
                <Text style={style.username}>{data.fullname}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatList;