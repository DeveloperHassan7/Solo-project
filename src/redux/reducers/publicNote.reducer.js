const publicNoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PUBLIC_NOTE':
            return action.payload;
        default:
            return state;
    }
};

export default publicNoteReducer;