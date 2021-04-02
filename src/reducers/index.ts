import { combineReducers } from 'redux';
import counter from './counter';
import isLogged from './isLogged';

const allReducer = combineReducers({
    counter,
    isLogged
})

export default allReducer;