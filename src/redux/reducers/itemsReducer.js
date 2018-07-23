const InitialState = {
    smiles: [
        {id: 0, text: ':))'},
        {id: 1, text: ':(('}
    ]
};

const items = (state = InitialState, action) => {
    let { smiles } = state;
    switch (action.type) {
        case 'ADD_ITEM':
            smiles = [...state.smiles, { id: new Date(), text: action.value }]
            return {...state, smiles}
        case 'DELETE_ITEM':
            smiles = state.smiles.filter(item => item.id != action.id)
            return {...state, smiles}
        default: return state;
    }
}

export default items;
