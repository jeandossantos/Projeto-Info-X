import { api } from '../../config/axiosConfig';

export function changeID(e) {
    return {
        type: 'ID_CHANGED',
        payload: e.target.value
    }
}

export function changeEquipment(e) {
    return {
        type: 'EQUIPMENT_CHANGED',
        payload: e.target.value
    }
}

export function changeDifect(e) {
    return {
        type: 'DIFECT_CHANGED',
        payload: e.target.value
    }
}

export function changeService(e) {
    return {
        type: 'SERVICE_CHANGED',
        payload: e.target.value
    }
}

export function changePrice(e) {
    return {
        type: 'PRICE_CHANGED',
        payload: e.target.value
    }
}

export function changeSituation(e) {
    return {
        type: 'SITUATION_CHANGED',
        payload: e.target.value
    }
}

export function changeClient(e) {
    return {
        type: 'CLIENT_CHANGED',
        payload: { cpf: e.target.value }
    }
}

export function getSituationList() {
    return dispacth => {
        api.get('/situations/all')
            .then(resp => dispacth({ type: 'SITUATION_LIST_CHANGED', payload: resp.data }))
    }
}

export function changePage(value) {
    return {
        type: 'PAGE_CHANGED',
        payload: value
    }
}

export function add(equipment, difect, service, price) {
    return dispatch => {
        api.post('/orders', { equipment, difect, service, price })
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
    }
}

export function update(id, equipment, difect, service, price) {
    return dispatch => {
        api.put(`/orders/${id}`, { equipment, difect, service, price })
            .then(() => dispatch(search()))
            .then(() => dispatch(clear()))
    }
}

export function remove(id) {
    return dispatch => {
        api.delete(`/orders/${id}`)
            .then(() => dispatch(search()))
    }
}

export function load(order) {
    return {
        type: 'LOAD',
        payload: order
    }
}

export function clear() {
    return { type: 'CLEAR' }
}

export function search(page = 1) {
    return dispatch => {
        api.get(`/orders?page=${page}`)
            .then(resp => dispatch({ type: 'LIST_CHANGED', payload: resp.data }))
    }
}

export function searchByID(id) {
    return dispacth => {
        api.get(`/orders/${id}`)
            .then(resp => dispacth(load(resp.data)))
    }
}

export function searchClientByCpf(cpf) {
    return dispacth => {
        api.get(`/clients/${cpf}`)
            .then(resp => dispacth({ type: 'CLIENT_CHANGED', payload: resp.data }));
    }
}