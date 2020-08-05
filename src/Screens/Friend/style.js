import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height,
        backgroundColor: color.light
    },
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60, 
        borderRadius: 50,
        backgroundColor: color.shadow
    },
    modalContainer: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        bottom: 0,
        padding: 30,
        backgroundColor: color.light,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    modalClose: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: color.dark,
        opacity: 0.5
    },
    modalInput: {
        borderBottomWidth: 1.5,
        borderBottomColor: color.shadow
    },
    modalAction: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15
    },
    modalButton: {
        padding: 15,
        paddingBottom: 0,
        fontSize: 15,
        color: color.shadow
    },
    value: {
        color: color.dark,
        fontSize: 15,
    },
    loadingContainer: {
        minHeight: Dimensions.get('window').height - 125,
        width: Dimensions.get('window').width,
        backgroundColor: color.light,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        width: 100,
        height: 100
    }
});

export default style;