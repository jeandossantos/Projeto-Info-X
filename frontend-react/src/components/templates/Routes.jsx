import { Routes, Route } from 'react-router-dom';
import Client from '../client/Client';
import Home from '../home/Home';
import Situation from '../situation/Situation';
import User from '../user/User';
import Order from '../order/Order';
import Signin from '../signin/Signin';
import PrivateRoute from './PrivateRoute';


export default function () {


    return (
        <Routes>
            <Route path='/' element={<Signin />} />

            <Route path='/home' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/clients' element={
                <PrivateRoute>
                    <Client />
                </PrivateRoute>
            } />
            <Route path='/users' element={
                <PrivateRoute>
                    <User />
                </PrivateRoute>
            } />
            <Route path='/situations' element={
                <PrivateRoute>
                    <Situation />
                </PrivateRoute>
            } />
            <Route path='/orders' element={
                <PrivateRoute>
                    <Order />
                </PrivateRoute>
            } />
        </Routes>
    )
}