import { login } from '../../Utils/Api';
import { decodeToken } from '../../Utils/helper';
import { setError, setLoading, setLocation } from './config';

const setLogin = (uname, pass) => dispatch => {
    login(uname, pass).then(res => {
        if (!res) {
            dispatch(setError('Invalid username or password'));
            dispatch(setLoading(false));
            return '';
        }
        dispatch(generateToken(res.data));
        dispatch(setLoading(false));
    })
}

const setUser = (data) => {
    return {
        type: 'SET_LOGIN',
        payload: data
    }
}

const setLogout = (id) => dispatch => {
    dispatch(removeUser());
    dispatch(removeRoom());
    dispatch(removeConfig());
    dispatch(setLocation(id, null));
}

const generateToken = (token) => dispatch => {
    const tokenData = decodeToken(token);
    const data = {
        id: tokenData.id,
        fullname: tokenData.fullname
    }
    dispatch(setUser(data));
}

const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}

const removeRoom = () => {
    return {
        type: 'REMOVE_ROOM'
    }
}

const removeConfig = () => {
    return {
        type: 'REMOVE_CONFIG'
    }
}

export {
    setLogin,
    setLogout,
    setUser,
    generateToken,
}