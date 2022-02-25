const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
        case 'DELETE_FAVORITE':
            return [];
        default:
            return state;    
    }
}

export default favoriteReducer;