import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import loggerMiddleware from './loggerMiddleware';

const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
);

export default store;