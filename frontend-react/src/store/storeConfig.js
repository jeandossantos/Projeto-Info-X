import { combineReducers } from "redux";
import clientReducers from './client/clientReducers';
import userReducers from './user/userReducers';
import situationReducers from './situation/situationReducers';
import orderReducers from './order/orderReducers';
import authReducers from './auth/authReducers';

const reducers = combineReducers({
    auth: authReducers,
    client: clientReducers,
    user: userReducers,
    situation: situationReducers,
    order: orderReducers
});

export default reducers;

