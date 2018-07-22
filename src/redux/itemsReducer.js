const InitialState = {
    smiles: [
        {id: 0, text: ':))'},
        {id: 1, text: ':(('}
    ]
};

const items = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let smiles = [...state.smiles, { id: new Date(), text: action.value }]
            return {...state, smiles}
        default: return state;
    }
}

export default items;
