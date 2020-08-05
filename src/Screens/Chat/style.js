import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    container: {
        minHeight: Dimensions.get('window').height,
        backgroundColor: color.light
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