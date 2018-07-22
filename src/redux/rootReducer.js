import { combineReducers } from 'redux';
import items from './itemsReducer';
import pages from './pageReducer';

const rootReducer = combineReducers({
    items,
    pages
})

export default rootReducer;
