import fetch from '../fetch';
import { path } from '../config';

const getChatByRoom = async (id) => {
    const options = {
        'method': 'get',
        'url': `${path.fetchChat}/room/${id}`,
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
    getChatByRoom
}