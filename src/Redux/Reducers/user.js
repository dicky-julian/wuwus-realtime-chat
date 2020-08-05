const initialState = {
    profile: false,
    isFetching: false,
}

const config = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                profile: action.payload
            }
        case 'SET_UPDATE_USER':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload
                }
            }
        case 'SET_USER_IMAGE':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    image: action.payload
                }
            }
        case 'SET_USER_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'REMOVE_USER':
            return {
                profile: false,
                isFetching: false
            }
        default:
            return state;
    }
}

export default config;