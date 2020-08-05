import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    listContainer: {
        width: Dimensions.get('window').width,
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.light
    },
    listAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    list: {
        justifyContent: 'center',
        width: '80%',
        height: 75,
        borderBottomWidth: 1,
        borderBottomColor: color.fade
    },
    username: {
        fontSize: 18,
        fontWeight: '700'
    },
    status: {
        marginTop: 5,
        fontSize: 15,
        color: color.shadow,
    },
});

export default style;