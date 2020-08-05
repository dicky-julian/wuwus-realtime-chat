const initialState = {
    isLoading: false,
    isError: false,
    location: null
}

const config = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                isError: action.payload
            }
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        case 'REMOVE_CONFIG':
            return {
                isLoading: false,
                isError: false,
                location: null
            }
        default:
            return state;
    }
}

export default config;