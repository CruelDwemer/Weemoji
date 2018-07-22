const InitialState = {
    mode: true
}

const pages = (state = InitialState, action) => {
    console.log(action, state);
    switch (action.type) {
        case 'SWITCH':
            return {...state, mode: !state.mode}; 
        default: return state;
    }
}

export default pages;
