import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    chatContainer: {
        width: Dimensions.get('window').width,
        padding: 20,
        paddingBottom: 10
    },
    chat: {
        maxWidth: 250,
        padding: 15,
        paddingBottom: 10,
        backgroundColor: '#fff',
        shadowColor: "#5f5f5f5c",
        shadowOpacity: 0.5,
        elevation: 3,
        borderRadius: 10,
    },
    message: {
        fontSize: 15,
        lineHeight: 20
    },
    date: {
        alignSelf: 'flex-end',
        marginTop: 5,
        fontSize: 12,
        color: '#8a8a8a'
    },
    isActive: {
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: color.pastel,
        borderRadius: 5
    },
    label: {
        fontSize: 15,
        fontWeight: '700',
        color: color.shadow
    }
});

export default style;