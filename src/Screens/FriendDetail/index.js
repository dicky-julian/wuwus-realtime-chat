import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Modal, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { Maps, Topbar } from '../../Components';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../Assets/Styles';
import { getUserById } from '../../Utils/Api';
import { baseUrl } from '../../Utils/config';

const url = 'https://pbs.twimg.com/profile_images/378800000704816685/9dc1439d939adc807ed6017093675231.jpeg';

const FriendDetail = (props) => {
    const [mapVisible, setMapVisible] = useState(false);
    const [location, setLocation] = useState([]);
    const [userProfile, setuserProfile] = useState();
    const id = props.route.params.id;

    useEffect(() => {
        if (!userProfile) {
            getUserById(id).then(res => {
                if (res) {
                    setuserProfile(res.data[0]);
                }
            })
        }

        if (userProfile && !location.length) {
            if (userProfile.location) {
                var loc = userProfile.location.split(",");
                setLocation(loc);
            }
        }
    })

    return (
        <>
            <Topbar previous={true} />
            <ScrollView>
                {userProfile ?
                    <View style={style.container}>
                        <ImageBackground
                            style={style.profileAvatar}
                            source={{ uri: userProfile.image ? `${baseUrl}/images/${userProfile.image}` : url }}
                            imageStyle={{ borderRadius: 100 }}>
                        </ImageBackground>
                        <View style={style.profileDetail}>
                            <Ionicons name="person" size={20} color={color.shadow} />
                            <View style={style.detail}>
                                <Text style={style.label}>Name</Text>
                                <Text style={style.value}>{userProfile.fullname}</Text>
                            </View>
                        </View>
                        <View style={style.profileDetail}>
                            <Ionicons name="information-circle-outline" size={23} color={color.shadow} />
                            <View style={style.detail}>
                                <Text style={style.label}>Status</Text>
                                <Text style={style.value}>{userProfile.status ? userProfile.status : 'Hello There !!! Im use Wuwus.'}</Text>
                            </View>
                        </View>
                        <View style={style.profileDetail}>
                            <Ionicons name="at-outline" size={23} color={color.shadow} />
                            <View style={style.detail}>
                                <Text style={style.label}>Profile ID</Text>
                                <Text style={style.value}>{userProfile.code_user}</Text>
                            </View>
                        </View>
                        <View style={style.profileDetail}>
                            <Ionicons name="location-outline" size={23} color={color.shadow} />
                            <TouchableOpacity style={{ ...style.detail, borderBottomWidth: 0 }} onPress={() => setMapVisible(userProfile.location ? true : false)}>
                                <View>
                                    <Text style={style.label}>User's Location</Text>
                                    <Text style={style.value}>{userProfile.location ? userProfile.location : 'Offline'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Modal animationType='fade' transparent={true} visible={mapVisible} onPress={() => setMapVisible(false)}>
                            <Maps latitude={parseInt(location[0])} longitude={parseInt(location[1])} onPress={() => setMapVisible(false)} markerImg={userProfile.image ? `${baseUrl}/images/${userProfile.image}` : url} identity={userProfile.fullname} />
                        </Modal>
                    </View>
                    :
                    <View style={style.loadingContainer}>
                        <Image
                            style={style.loading}
                            source={require('../../Assets/Images/loading.gif')}
                        />
                    </View>
                }
            </ScrollView>
        </>
    )
}

export default FriendDetail;