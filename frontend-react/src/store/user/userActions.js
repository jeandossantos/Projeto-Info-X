import { api } from '../../config/axiosConfig';

export function changeName(e) {
    return {
        type: 'NAME_CHANGED',
        payload: e.target.value
    }
}

export function changeEmail(e) {
    return {
        type: 'EMAIL_CHANGED',
        payload: e.target.value
    }
}

export function changeCPF(e) {
    return {
        type: 'CPF_CHANGED',
        payload: e.target.value
    }
}

export function changePage(value) {
    return {
        type: 'PAGE_CHANGED',
        payload: value
    }
}

export function changeWHATSAPP(e) {
    return {
        type: 'WHATSAPP_CHANGED',
        payload: e.target.value
    }
}

export function changePassword(e) {
    return {
        type: 'PASSWORD_CHANGED',
        payload: e.target.value
    }
}

export function changeConfirmPassword(e) {
    return {
        type: 'COMFIRM_PASSWORD_CHANGED',
        payload: e.target.value
    }
}

export function add(name, email, cpf, whatsapp, password, confirmPassword) {
    return dispatch => {
        api.post('/users', { name, email, cpf, whatsapp, password, confirmPassword })
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
    }
}

export function update(id, name, email, cpf, whatsapp, password, confirmPassword) {
    return dispatch => {
        api.put(`/users/${id}`, { name, email, cpf, whatsapp, password, confirmPassword })
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
    }
}

export function remove(id) {
    return dispatch => {
        api.delete(`/users/${id}`)
            .then(() => dispatch(search()))
    }
}

export function load(user) {
    return {
        type: 'LOAD',
        payload: user
    }
}

export function clear() {
    return { type: 'CLEAR' }
}

export function search(page = 1) {

    return dispatch => {
        api.get(`/users?page=${page}`)
            .then(resp => dispatch({ type: 'LIST_CHANGED', payload: resp.data }))
    }
}

export function searchByCPF(cpf) {
    return dispacth => {
        api.get(`/users/${cpf}`)
            .then(resp => dispacth(load(resp.data)));
    }
}