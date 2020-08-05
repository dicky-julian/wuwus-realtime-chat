import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    chatContainer: {
        width: Dimensions.get('window').width,
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.light
    },
    chatAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    chat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        height: 75,
        borderBottomWidth: 1,
        borderBottomColor: color.fade
    },
    chatView: {
        width: '96%'
    },
    username: {
        fontSize: 18,
        fontWeight: '700',
        color: color.dark
    },
    message: {
        marginTop: 5,
        fontSize: 15,
        color: color.shadow,
    },
    indicator: {
        width: '3%',
        paddingTop: '3%',
        backgroundColor: color.shadow,
        borderRadius: 50
    }
});

export default style;