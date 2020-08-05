const initialState = {
    isLogin: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                isLogin: action.payload
            }
        case 'REMOVE_USER':
            return {
                isLogin: false
            }
        default:
            return state
    }
}

export default auth;