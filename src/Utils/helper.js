import jwtDecode from 'jwt-decode';

const decodeToken = token => {
    const tokenData = jwtDecode(token);
    return tokenData;
}

const createFormData = (image, body) => {
    const data = new FormData();

    data.append('image', {
        name: image.fileName,
        type: image.type,
        uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
    });

    // Object.keys(body).forEach(key => {
    //     data.append(key, body[key]);
    // });

    return data;
};

export {
    decodeToken,
    createFormData
};