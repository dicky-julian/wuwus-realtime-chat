import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import { color } from '../../Assets/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { setError } from '../../Redux/Actions/config';

const Topbar = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.leftSide}>
                {props.previous ?
                    <TouchableOpacity onPress={() => navigation.navigate('Index')}>
                        <Ionicons name="arrow-back-outline" size={20} style={{ marginRight: 15 }} color={color.light} />
                    </TouchableOpacity> : <></>}
                {props.children ? props.children : <Text style={style.title}>{props.title || 'Wuwus'}</Text>}

            </View>
            {props.previous ? <></> : <TouchableOpacity onPress={() => setModalVisible(true)}><Ionicons name="ellipsis-vertical-outline" size={20} color={color.light} /></TouchableOpacity>}

            <Modal animationType='fade' transparent={true} visible={modalVisible} onPress={() => setModalVisible(false)}>
                <TouchableOpacity style={style.modalClose} onPress={() => setModalVisible(false)} />
                <View style={style.modalContainer}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Setting'); setModalVisible(false) }}>
                        <Text style={style.modalList}>Setting</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const mapStateToProps = state => ({
    config: state.config
});

const mapDispathToProps = { setError };

export default connect(mapStateToProps, mapDispathToProps)(Topbar);