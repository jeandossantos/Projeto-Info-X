
const initialState = {
    id: '',
    equipment: '',
    difect: '',
    service: '',
    price: 0,
    situation: {
        id: 0,
        name: ''
    },
    client: {
        id: '',
        name: '',
        email: '',
        cpf: '',
        whatsapp: '',
        createdAt: ''
    },
    user: {
        id: '',
        name: '',
        email: '',
        cpf: '',
        whatsapp: '',
        createdAt: ''
    },
    list: [],
    situationList: [],
    page: 1,
    limit: 0,
    count: 0
}

export default function (state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case 'ID_CHANGED':
            return { ...state, id: payload }
        case 'EQUIPMENT_CHANGED':
            return { ...state, equipment: payload }
        case 'DIFECT_CHANGED':
            return { ...state, difect: payload }
        case 'SERVICE_CHANGED':
            return { ...state, service: payload }
        case 'PRICE_CHANGED':
            return { ...state, price: payload }
        case 'SITUATION_CHANGED':
            return { ...state, situation: payload }
        case 'CLIENT_CHANGED':
            return { ...state, client: payload }
        case 'PAGE_CHANGED':
            return { ...state, page: payload }
        case 'LIST_CHANGED':
            return { ...state, list: payload.orders, count: payload.count, limit: payload.limit }
        case 'SITUATION_LIST_CHANGED':
            return { ...state, situationList: payload }
        case 'CLEAR':
            return { ...initialState, list: state.list, situationList: state.situationList }
        case 'LOAD':
            return { ...state, ...payload }
        default:
            return state;
    }
}