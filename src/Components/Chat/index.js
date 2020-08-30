import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../Assets/Styles';

const Chat = (props) => {
    const date = moment(props.date).format('HH:mm A');
    const chatShape = props.self ? { alignSelf: 'flex-end', borderTopLeftRadius: 0 } : { alignSelf: 'flex-start', borderTopRightRadius: 0 };
    const chatPadding = props.status ? { paddingTop: 5, paddingBottom: 5 } : { paddingTop: 20, paddingBottom: 5 };
    return (
        <>{props.isStart ?
            <View style={style.isActive}>
                <Text style={style.label}>Send a message to start a chat</Text>
                <Ionicons name="information-circle-outline" size={23} color={color.shadow} />
            </View>
            :
            <View style={{ ...style.chatContainer, ...chatPadding }}>
                <View style={{ ...style.chat, ...chatShape }}>
                    <Text style={style.message}>{props.message}</Text>
                    <Text style={style.date}>{date}</Text>
                </View>
            </View>
        }
        </>
    )
}

export default Chat;