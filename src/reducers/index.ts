import { combineReducers } from 'redux';
import counter from './counter';
import menuState from './menuState';
import gameBoard from './gameBoard';

const allReducer = combineReducers({
    counter,
    menuState,
    gameBoard,
})

export default allReducer;