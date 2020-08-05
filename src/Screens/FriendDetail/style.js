import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height - 90,
        backgroundColor: '#fff',
        padding: 20
    },
    profileAvatar: {
        width: 175,
        height: 175,
        margin: 20,
        marginBottom: 30,
        alignSelf: 'center'
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        shadowColor: "#000",
        elevation: 2
    },
    profileDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detail: {
        width: '90%',
        marginBottom: 20,
        marginLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },
    label: {
        marginBottom: 5,
        fontSize: 15,
        color: '#8a8a8a'
    },
    value: {
        color: '#000',
        fontSize: 15,
        textTransform: 'capitalize',
    },
    modalContainer: {
        width: Dimensions.get('window').width,
        position: 'absolute',
        bottom: 0,
        padding: 30,
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    modalClose: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#000',
        opacity: 0.5
    },
    modalInput: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#0f9183'
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
        color: '#0f9183'
    },
    loadingContainer: {
        minHeight: Dimensions.get('window').height - 90,
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