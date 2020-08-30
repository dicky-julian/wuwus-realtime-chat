import { getUserById, getRoomByUser, addFriendRoom, updateRoom } from '../../Utils/Api';
import { setError, setLoading } from './config';

const setRoom = id => dispatch => {
    let friends = [];

    getRoomByUser(id).then(res => {
        let rooms = res.data;
        if (rooms) {
            if (rooms.length) {
                rooms.map(room => friends.push({id: room.id_friend, fullname: room.friendName, image: room.friendImage}))

                dispatch(useRoom(rooms));
                dispatch(useFriend(friends));
            }
        }
    })
}

const setFetching = status => {
    return {
        type: 'SET_FETCHING',
        payload: status
    }
}

const setReadChat = (id_room, status) => dispatch => {
    updateRoom(id_room, {status: status}).then(res => {
        if(res) {
            dispatch(useReadChat(id_room, status))
        }
    })
}

const addRoom = id => dispatch => {
    getRoomByUser(id).then(res => {
        if (res.data) {
            if (res.data.length) {
                dispatch(useRoom(res.data));
            }
        }
    })
}

const addFriend = (id_user, code_user) => dispatch => {
    addFriendRoom(id_user, code_user).then(res => {
        const result = [];
        if (res.data) {
            result.push(res.data);
            dispatch(setError('Succesfully added friend', 'success'));
        } else if (res.status === 'Duplicate') {
            dispatch(setError('Friend Already Available'));
        }
        else {
            dispatch(setError('Code User is Invalid'));
        }
        dispatch(useFriend(result));
        dispatch(setFetching(true));
        dispatch(setLoading(false));
    })
}

const updateRooms = data => dispatch => {
    dispatch(useRoom(data));
    dispatch(setFetching(true));
}

const updateFriend = data => dispatch => {
    dispatch(useUpdateFriend(data));
    dispatch(setFetching(true));
}

const useRoom = (data) => {
    return {
        type: 'SET_ROOM',
        payload: data
    }
}

const useFriend = (data) => {
    return {
        type: 'SET_FRIEND',
        payload: data
    }
}

const useReadChat = (id_room, status) => {
    return {
        type: 'SET_READ_CHAT',
        payload: {
            id_room: id_room,
            status: status
        }
    }
}

const useUpdateFriend = (data) => {
    return {
        type: 'UPDATE_FRIEND',
        payload: data
    }
}


export {
    setRoom,
    setFetching,
    setReadChat,
    addRoom,
    addFriend,
    updateRooms,
    updateFriend
}