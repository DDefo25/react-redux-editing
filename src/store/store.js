import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from './reducers/serviceListReducer';
import serviceAddReducer from './reducers/serviceAddReducer';
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});
const store = legacy_createStore(reducer);
export default store;