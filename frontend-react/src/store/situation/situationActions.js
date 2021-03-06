import { api } from '../../config/axiosConfig.js';
import { toast } from '../../config/toastify';

export function changeName(e) {
    return {
        type: 'NAME_CHANGED',
        payload: e.target.value
    }
}

export function changePage(value) {
    return {
        type: 'PAGE_CHANGED',
        payload: value
    }
}

export function add(name) {
    return dispatch => {
        api.post('/situations', { name })
            .then(() => toast('Sucesso!', 'success'))
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
            .catch(e => toast(e.request.response, 'error'))
    }
}

export function update(id, name) {

    return dispatch => {
        api.put(`/situations/${id}`, { name })
            .then(() => toast('Sucesso!', 'success'))
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
            .catch(e => toast(e.request.response, 'error'))
    }
}

export function remove(id) {
    return dispatch => {
        api.delete(`/situations/${id}`)
            .then(() => toast('Sucesso!', 'success'))
            .then(() => dispatch(search()))
    }
}

export function load(situation) {
    return {
        type: 'LOAD',
        payload: situation
    }
}

export function clear() {
    return { type: 'CLEAR' }
}

export function search(page = 1) {

    return dispatch => {
        api.get(`/situations?page=${page}`)
            .then(resp => dispatch({ type: 'LIST_CHANGED', payload: resp.data }))
    }
}
