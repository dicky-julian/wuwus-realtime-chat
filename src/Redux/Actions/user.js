import { getUserById, updateImageProfile, updateUser } from '../../Utils/Api';

const setUserProfile = id => dispatch => {
    getUserById(id).then(res => {
        dispatch(useUserProfile(res.data[0]));
    })
}

const setUserImage = (id, image) => dispatch => {
    updateImageProfile(id, {'image': image}).then(res => {
        if (res) {
            dispatch(useUserImage(res.data.image));
            dispatch(setFetching(true));
        }
        else dispatch(useUserImage());
    })
}

const setUpdateUser = (id, data) => dispatch => {
    updateUser(id, data).then(res => {
        if (res) {
            dispatch(useUpdateUser(data));
            dispatch(setFetching(true));
        }
    })
}

const setFetching = (status) => {
    return {
        type: 'SET_USER_FETCHING',
        payload: status
    }
}

const useUserProfile = (data) => {
    return {
        type: 'SET_USER',
        payload: data
    }
}

const useUpdateUser = (data) => {
    return {
        type: 'SET_UPDATE_USER',
        payload: data
    }
}

const useUserImage = (data) => {
    return {
        type: 'SET_USER_IMAGE',
        payload: data
    }
}

export {
    setUserProfile,
    setUserImage,
    setUpdateUser,
    setFetching
}