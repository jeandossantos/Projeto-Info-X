import { api } from '../../config/axiosConfig';
import { toast } from '../../config/toastify';
import { clear } from '../user/userActions';

export function login(email, password) {
    return dispatch => {
        api.post('/signin', { email, password })
            .then(resp => {
                toast('Sucesso!', 'success')
                dispatch({ type: 'LOGIN', payload: resp.data });
                dispatch(clear);
                window.location.pathname = '/home';
            })
            .catch(error => {
                toast(error.request.response, 'error')
            })
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}