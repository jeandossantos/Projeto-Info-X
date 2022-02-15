import { combineReducers } from "redux";
import clientReducers from './client/clientReducers';

const reducers = combineReducers({
    client: clientReducers
});

export default reducers;

