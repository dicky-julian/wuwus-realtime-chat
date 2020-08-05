import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: 15,
        borderRadius: 50
    },
    profileName: {
        fontSize: 20,
        fontWeight: '700',
        color: color.light
    },
    container: {
        height: Dimensions.get('window').height- 155,
        backgroundColor: color.light,
        paddingTop: 10
    },
    inputContainer: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        left: 0,
        backgroundColor: color.light,
    },
    modalInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 80,
        height: 45,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 15,
        borderRadius: 40,
        backgroundColor: color.light,
        borderWidth: 1,
        borderColor: color.fade
    },
    input: {
        height: '100%',
        width: '85%',
    },
    submitButton: {
        width: 45,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: color.secondary
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
    },
    uploadBack: {
        width: 55,
        height: 55,
        position: 'absolute',
        top: 10,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: color.dark,
        opacity: 0.5
    },
    uploadImage: {
        width: Dimensions.get('window').width,
        height: '100%'
    },
    uploadImageSubmit: {
        width: 65,
        height: 65,
        position: 'absolute',
        bottom: 25,
        right: 25,
        borderRadius: 55,
        justifyContent: 'center',
        backgroundColor: color.secondary
    },
    loadingContainer: {
        minHeight: Dimensions.get('window').height,
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