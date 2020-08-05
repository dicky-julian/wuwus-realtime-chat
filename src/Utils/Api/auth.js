import fetch from '../fetch';
import { path } from '../config';

const login = async (uname, pass) => {
    const options = {
        'method': 'post',
        'url': path.login,
        'data': {
            'username': uname,
            'password': pass
        }
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

const register = async (fullname, username, password) => {
    const options = {
        'method': 'post',
        'url': path.register,
        'data': {
            'fullname': fullname,
            'username': username,
            'password': password,
        }
    };

    const res = await fetch(options)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false
        });
    return res;
}

export {
    login,
    register
}