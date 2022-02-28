import { Navigate } from 'react-router-dom';
import { api } from '../../config/axiosConfig';
import { clear } from '../user/userActions';

export function login(email, password) {
    return dispatch => {
        api.post('/signin', { email, password })
            .then(resp => {
                dispatch({ type: 'LOGIN', payload: resp.data });
                dispatch(clear);
                window.location.pathname = '/home';
            })
            .catch(console.log)
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}