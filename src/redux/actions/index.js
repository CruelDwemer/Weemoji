export const switchMode = () => ({
    type: 'SWITCH'
})

export const addItem = (value) => ({
    type: 'ADD_ITEM',
    value
})

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    id
})