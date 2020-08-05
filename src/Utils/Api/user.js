import { Platform } from 'react-native';
import fetch from '../fetch';
import { path } from '../config';

const getUserById = async (id) => {
    const options = {
        'method': 'get',
        'url': `${path.fetchUser}/${id}`,
    };

    const res = await fetch(options)
        .then(res => {
            return {
                data: res.data.data
            }
        })
        .catch(() => {
            return false
        });
    return res;
}

const updateImageProfile = async (id, data) => {
    const formData = new FormData();
    const image = data.image;
    formData.append('image', {
        uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
        type: image.type,
        name: image.fileName
    });

    const options = {
        'method': 'put',
        'url': `${path.fetchUser}/${id}`,
        'data': formData,
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    };

    const res = await fetch(options)
        .then(res => {
            return {
                data: res.data.data
            }
        })
        .catch((err) => {
            return false
        });
    return res;
}

const updateUser = async (id, data) => {
    const options = {
        'method': 'put',
        'url': `${path.fetchUser}/${id}`,
        'data': data,
    };

    const res = await fetch(options)
        .then(res => {
            return {
                data: res.data.data
            }
        })
        .catch((err) => {
            return false
        });
    return res;
}

export {
    getUserById,
    updateImageProfile,
    updateUser
}