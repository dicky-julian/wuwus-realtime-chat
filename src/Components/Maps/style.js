import { Dimensions, StyleSheet } from 'react-native';
import { color } from '../../Assets/Styles';

const style = StyleSheet.create({
    mapContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    mapBack: {
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
    markerImage: {
        width: 30,
         height: 30,
         borderRadius: 30,
         borderWidth: 2,
         borderColor: color.light
    }
});

export default style;