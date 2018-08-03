const InitialState = {
    mode: false
}

const pages = (state = InitialState, action) => {
    switch (action.type) {
        case 'SWITCH':
            return {...state, mode: !state.mode}; 
        default: return state;
    }
}

export default pages;
