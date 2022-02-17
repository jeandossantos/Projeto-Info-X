import { combineReducers } from "redux";
import clientReducers from './client/clientReducers';
import userReducers from './user/userReducers';
import situationReducers from './situation/situationReducers';

const reducers = combineReducers({
    client: clientReducers,
    user: userReducers,
    situation: situationReducers
});

export default reducers;

