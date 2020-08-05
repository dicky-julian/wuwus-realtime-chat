import { updateUser } from '../../Utils/Api';

const setLoading = (status) => {
    return {
        type: 'SET_LOADING',
        payload: status
    }
}

const setError = (message = false, type) => {
    return {
        type: 'SET_ERROR',
        payload: !message ? false :
            {
                type: type || 'danger',
                message: message
            }
    }
}

const setLocation = (id_user, location) => dispatch => {
    let loc = location;
    if (location) {
        const { latitude, longitude } = location;
        loc = `${latitude},${longitude}`;
    }
    updateUser(id_user, { 'location': loc }).then(res => {
        if (res) {
            dispatch(useLocation(location));
        } else {
            dispatch(useLocation());
        }
    })
}

const useLocation = location => {
    return {
        type: 'SET_LOCATION',
        payload: location || null
    }
}

export {
    setLoading,
    setError,
    setLocation
}