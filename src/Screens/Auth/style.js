import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        backgroundColor: color.secondary
    },
    headerImage: {
        width: Dimensions.get('window').width,
    },
    formContainer: {
        padding: 25,
        paddingTop: 0
    },
    headerText: {
        marginBottom: 5,
        fontSize: 35,
        fontWeight: '700',
        color: color.light
    },
    label: {
        color: color.light,
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10
    },
    formInput: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#203D4D',
        fontSize: 15,
        color: color.light
    },
    bt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        padding: 15,
        backgroundColor: color.pastel,
        borderRadius: 5,
    },
    btLabel: {
        fontSize: 17,
        color: color.dark
    },
    endLabel: {
        marginBottom: 20,
        fontSize: 15,
        color: color.light,
    }
});

export default style;