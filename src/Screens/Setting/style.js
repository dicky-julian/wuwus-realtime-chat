import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height - 90,
        backgroundColor: color.light,
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
        backgroundColor: color.light,
        shadowColor: "#000",
        elevation: 2
    },
    profileDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detail: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: color.fade
    },
    label: {
        marginBottom: 5,
        fontSize: 15,
        color: color.default
    },
    value: {
        color: color.dark,
        fontSize: 15,
        textTransform: 'capitalize',
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
    btLogout: {
        width: '100%',
        marginBottom: 30,
        padding: 15,
        backgroundColor: color.secondary,
        borderRadius: 5,
        alignItems: 'center'
    },
    labelLogout: {
        fontSize: 15,
        color: color.light
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
    }
});

export default style;