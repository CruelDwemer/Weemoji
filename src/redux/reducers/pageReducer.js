const initialState = {
    mode: false
}

const pages = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH':
            return {...state, mode: !state.mode}; 
        default: return state;
    }
}

export default pages;
