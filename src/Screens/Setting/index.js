import React, { Component } from 'react';
import { Image, ImageBackground, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { Maps, Topbar } from '../../Components';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../Assets/Styles';
import { setUserProfile, setUserImage, setUpdateUser, setFetching } from '../../Redux/Actions/user';
import { setLogout } from '../../Redux/Actions/auth';
import { baseUrl } from '../../Utils/config';

const url = 'https://pbs.twimg.com/profile_images/378800000704816685/9dc1439d939adc807ed6017093675231.jpeg';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapVisible: false,
            modalVisible: false,
            modalImageVisible: false,
            modalType: '',
            userProfile: props.user.profile,
            imageProfile: '',
            name: '',
            status: ''
        }
    }

    setMapVisible = status => {
        this.setState({ mapVisible: status })
    }

    setModalVisible = status => {
        this.setState({ modalVisible: status })
    }

    setmodalImageVisible = status => {
        this.setState({ modalImageVisible: status })
    }

    setModalType = status => {
        this.setState({ modalType: status })
    }

    setImageProfile = image => {
        this.setState({ imageProfile: image })
    }

    modalToogle = (status, type) => {
        this.setModalVisible(status);
        this.setModalType(type);
    }

    handlePickImage = () => {
        const options = {
            noData: true,
        }
        ImagePicker.showImagePicker(options, res => {
            if (res.uri) this.setImageProfile(res);
            this.setmodalImageVisible(true);
        })
    }

    handleUpdateProfile = () => {
        const type = this.state.modalType;
        const id = this.props.auth.isLogin.id;
        const name = this.state.name;
        const status = this.state.status;
        if (type === 'name') {
            if (!name) {

            }
            this.props.setUpdateUser(id, { 'fullname': name });
        } else if (type === 'status') {
            if (!status) {

            }
            this.props.setUpdateUser(id, { 'status': status });
        }
        this.setModalVisible(false)
    }

    handleSendImage = () => {
        const id = this.props.auth.isLogin.id;
        const image = this.state.imageProfile;
        this.props.setUserImage(id, image);
    }

    componentDidMount() {
        if (!this.state.userProfile) {
            const userId = this.props.auth.isLogin.id;
            this.props.setUserProfile(userId);
        }
    }

    componentDidUpdate() {
        if (!this.state.userProfile) {
            this.setState({ userProfile: this.props.user.profile });
        }

        if (this.state.userProfile && !this.state.name && !this.state.status) {
            const { fullname, status } = this.state.userProfile;
            this.setState({
                name: fullname,
                status: status
            })
        }

        if (this.props.user.isFetching) {
            this.setState({ userProfile: this.props.user.profile });
            this.props.setFetching(false);
            this.setmodalImageVisible(false);
        }
    }

    render() {
        const userProfile = this.state.userProfile;
        return (
            <>
                <Topbar title='Setting' previous={true} />
                <ScrollView>
                    {userProfile ?
                        <View style={style.container}>
                            <TouchableOpacity onPress={() => this.handlePickImage()}>
                                <ImageBackground
                                    style={style.profileAvatar}
                                    source={{ uri: userProfile.image ? `${baseUrl}/images/${userProfile.image}` : url }}
                                    imageStyle={{ borderRadius: 100 }}>
                                    <View style={style.editIcon}><Ionicons name="camera-outline" size={23} /></View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={style.profileDetail}>
                                <Ionicons name="person" size={20} color={color.shadow} />
                                <TouchableOpacity style={style.detail} onPress={() => this.modalToogle(true, 'name')}>
                                    <View>
                                        <Text style={style.label}>Name</Text>
                                        <Text style={style.value}>{userProfile.fullname}</Text>
                                    </View>
                                    <Ionicons name="create-outline" size={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.profileDetail}>
                                <Ionicons name="information-circle-outline" size={23} color={color.shadow} />
                                <TouchableOpacity style={style.detail} onPress={() => this.modalToogle(true, 'status')}>
                                    <View>
                                        <Text style={style.label}>Status</Text>
                                        <Text style={style.value}>{userProfile.status ? userProfile.status : 'Hello There !!! Im use Wuwus.'}</Text>
                                    </View>
                                    <Ionicons name="create-outline" size={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.profileDetail}>
                                <Ionicons name="at-outline" size={23} color={color.shadow} />
                                <TouchableOpacity style={style.detail}>
                                    <View>
                                        <Text style={style.label}>Profile ID</Text>
                                        <Text style={style.value}>{userProfile.code_user}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {this.props.location ?
                                <View style={style.profileDetail}>
                                    <Ionicons name="location-outline" size={23} color={color.shadow} />
                                    <TouchableOpacity style={{ ...style.detail, borderBottomWidth: 0 }} onPress={() => this.setMapVisible(true)}>
                                        <View>
                                            <Text style={style.label}>User's Location</Text>
                                            <Text style={style.value}>{`(${this.props.location.latitude} , ${this.props.location.longitude})`}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View> : <></>
                            }
                            <TouchableOpacity style={style.btLogout} onPress={() => this.props.setLogout(this.props.auth.isLogin.id)}>
                                <Text style={style.labelLogout}>Logout</Text>
                            </TouchableOpacity>
                            <Modal animationType='fade' transparent={true} visible={this.state.modalVisible} onPress={() => this.setModalVisible(false)}>
                                <TouchableOpacity style={style.modalClose} onPress={() => this.setModalVisible(false)} />
                                <View style={style.modalContainer}>
                                    <Text style={style.value}>Insert your {this.state.modalType}</Text>
                                    <TextInput style={style.modalInput} onChangeText={(text) => { this.state.modalType === 'name' ? this.setState({ name: text }) : this.setState({ 'status': text }) }} value={this.state.modalType === 'name' ? this.state.name : this.state.status} />
                                    <View style={style.modalAction}>
                                        <TouchableOpacity onPress={() => this.setModalVisible(false)}><Text style={style.modalButton}>Cancel</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.handleUpdateProfile()}><Text style={style.modalButton}>Save</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                            {this.props.location ?
                                <Modal animationType='fade' transparent={true} visible={this.state.mapVisible} onPress={() => this.setMapVisible(false)}>
                                    <Maps latitude={this.props.location.latitude} longitude={this.props.location.longitude} onPress={() => this.setMapVisible(false)} markerImg={userProfile.image ? `${baseUrl}/images/${userProfile.image}` : url} identity={userProfile.fullname} />
                                </Modal>
                                : <></>}
                            {this.state.imageProfile ?
                                <Modal animationType='fade' transparent={false} visible={this.state.modalImageVisible} onPress={() => this.setmodalImageVisible(false)}>

                                    <View style={{ backgroundColor: color.dark }}>
                                        <ImageBackground
                                            source={{ uri: this.state.imageProfile.uri }}
                                            style={style.uploadImage}
                                            resizeMode='contain'
                                        >
                                            <TouchableOpacity style={style.uploadBack} onPress={() => this.setmodalImageVisible(false)}>
                                                <Ionicons name="arrow-back-outline" size={25} color={color.light} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={style.uploadImageSubmit} onPress={() => this.handleSendImage()}>
                                                <Ionicons name="send" size={15} style={{ alignSelf: 'center' }} color={color.light} />
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                </Modal>
                                : <></>}
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
}

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user,
    config: state.config,
    location: state.config.location
});

const mapDispathToProps = { setUserProfile, setLogout, setUserImage, setUpdateUser, setFetching };

export default connect(mapStateToProps, mapDispathToProps)(Setting);