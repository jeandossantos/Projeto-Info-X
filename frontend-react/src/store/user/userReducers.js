
const initialState = {
    id: null,
    name: '',
    email: '',
    cpf: '',
    whatsapp: '',
    password: '',
    confirmPassword: '',
    list: [],
    page: 1,
    limit: 0,
    count: 0
}

export default function (state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: payload }
        case 'EMAIL_CHANGED':
            return { ...state, email: payload }
        case 'CPF_CHANGED':
            return { ...state, cpf: payload }
        case 'WHATSAPP_CHANGED':
            return { ...state, whatsapp: payload }
        case 'PASSWORD_CHANGED':
            return { ...state, password: payload }
        case 'COMFIRM_PASSWORD_CHANGED':
            return { ...state, confirmPassword: payload }
        case 'PAGE_CHANGED':
            return { ...state, page: payload }
        case 'LIST_CHANGED':
            return { ...state, list: payload.users, count: payload.count, limit: payload.limit }
        case 'CLEAR':
            return { ...initialState, list: state.list }
        case 'LOAD':
            return { ...state, ...payload }
        default:
            return state;
    }
}