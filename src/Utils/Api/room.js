import fetch from '../fetch';
import { path } from '../config';

const getRoomByUser = async (id) => {
    const options = {
        'method': 'get',
        'url': `${path.fetchRoom}/user/${id}`,
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

const addFriendRoom = async (id_user, code_user) => {
    const options = {
        'method': 'post',
        'url': `${path.fetchRoom}/friend`,
        data: {
            'id_user': id_user,
            'code_user': code_user
        }
    };

    const res = await fetch(options)
        .then(res => {
            return {
                data: res.data.data
            }
        })
        .catch((err) => {
            if (err.response.status === 402) {
                return {
                    status: 'Duplicate'
                }
            }
            return false;
        });
    return res;
}

const updateRoom = async (id_room, data) => {
    const options = {
        'method': 'put',
        'url': `${path.fetchRoom}/${id_room}`,
        data: data
    };

    const res = await fetch(options)
        .then(res => {
            return {
                data: res.data.data
            }
        })
        .catch((err) => {
            return false;
        });
    return res;
}

export {
    getRoomByUser,
    addFriendRoom,
    updateRoom
}