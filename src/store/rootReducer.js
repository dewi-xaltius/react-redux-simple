// store/rootReducer.js
import { combineReducers } from 'redux';
import { UPDATE_MESSAGE } from './actions';

function testReducer(state = { message: '' }, action) {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    test: testReducer
});

export default rootReducer;
