import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { color } from '../../Assets/Styles';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Maps = (props) => {
    const { latitude, longitude } = props;

    return (
        <View style={style.mapContainer}>
            <MapView
                style={style.mapContainer}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: latitude, longitude: longitude }}
                    title={props.identity}
                >
                    <Image
                        source={{ uri: props.markerImg }}
                        style={style.markerImage}
                    />
                </Marker>
            </MapView>
            <TouchableOpacity style={style.mapBack} onPress={props.onPress}>
                <Ionicons name="arrow-back-outline" size={25} color={color.light} />
            </TouchableOpacity>
        </View>
    )
}

export default Maps;