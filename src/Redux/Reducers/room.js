const initialState = {
    room: '',
    friend: '',
    isFetching: false,
}

const room = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROOM':
            return {
                ...state,
                room: action.payload
            }
        case 'SET_FRIEND':
            return {
                ...state,
                friend: !state.friend.length ? action.payload : [
                    ...state.friend,
                    ...action.payload
                ],
            }
        case 'SET_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'SET_READ_CHAT':
            const room = state.room;
            const selectedRoom = room.filter(room => room.id === action.payload.id_room);
            const index = selectedRoom.indexOf(room);
            const dataRoom = selectedRoom[0];
            dataRoom.status = action.payload.status;
            room.splice(index, 1);
            room.push(dataRoom);
            return {
                ...state,
                room: room
            }
        case 'UPDATE_FRIEND':
            return {
                ...state,
                friend: action.payload
            }
        case 'REMOVE_ROOM':
            return {
                room: '',
                friend: '',
                isFetching: false
            }
        default:
            return state;
    }
}

export default room;