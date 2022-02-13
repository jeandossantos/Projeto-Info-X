import { Routes, Route } from 'react-router-dom';
import Client from '../client/Client';
import Home from '../home/Home';
import Situation from '../situation/Situation';
import User from '../user/User';
import Order from '../order/Order';

export default function () {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/clients' element={<Client />} />
            <Route path='/users' element={<User />} />
            <Route path='/situations' element={<Situation />} />
            <Route path='/orders' element={<Order />} />
        </Routes>
    )
}