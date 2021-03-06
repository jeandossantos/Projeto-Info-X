import { api } from '../../config/axiosConfig';
import { toast } from '../../config/toastify';

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
export function add(name, email, cpf, whatsapp) {
    return dispatch => {
        api.post('/clients', { name, email, cpf, whatsapp })
            .then(() => toast('Sucesso!', 'success'))
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
            .catch(e => toast(e.request.response, 'error'))
    }
}

export function update(id, name, email, cpf, whatsapp) {
    return dispatch => {
        api.put(`/clients/${id}`, { name, email, cpf, whatsapp })
            .then(() => toast('Sucesso!', 'success'))
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
            .catch(e => toast(e.request.response, 'error'))
    }
}

export function remove(id) {
    return dispatch => {
        api.delete(`/clients/${id}`)
            .then(() => toast('Sucesso!', 'success'))
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
        api.get(`/clients?page=${page}`)
            .then(resp => dispatch({ type: 'LIST_CHANGED', payload: resp.data }))
    }
}

export function searchByCPF(cpf) {
    return dispacth => {
        api.get(`/clients/${cpf}`)
            .then(resp => dispacth(load(resp.data)));
    }
}