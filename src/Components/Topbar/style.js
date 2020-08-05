import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 65,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.secondary
    },
    title: {
        fontSize: 18,
        color: color.light
    },
    leftSide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalContainer: {
        width: 175,
        position: 'absolute',
        top: 60,
        right: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        elevation: 2
    },
    modalList: {
        padding: 20,
        fontSize: 15,
    },
    modalClose: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default style;