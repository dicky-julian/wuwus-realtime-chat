import { Dimensions, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 20,
        padding: 20,
        paddingBottom: 15,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        borderRadius: 5,
        shadowColor: "#5f5f5f5c",
        shadowOpacity: 0.5,
        elevation: 3
    },
    message: {
        fontSize: 16,
        color: '#fff'
    }
});

export default style;