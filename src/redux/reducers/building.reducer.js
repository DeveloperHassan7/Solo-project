const buildingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BUILDING':
            return action.payload;
        default:
            return state;
    }
};

export default buildingReducer;