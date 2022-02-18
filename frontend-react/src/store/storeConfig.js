import { combineReducers } from "redux";
import clientReducers from './client/clientReducers';
import userReducers from './user/userReducers';
import situationReducers from './situation/situationReducers';
import orderReducers from './order/orderReducers';

const reducers = combineReducers({
    client: clientReducers,
    user: userReducers,
    situation: situationReducers,
    order: orderReducers
});

export default reducers;

