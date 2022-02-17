const initialState = {
    id: null,
    name: '',
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
        case 'LIST_CHANGED':
            return { ...state, list: payload.situations, count: payload.count, limit: payload.limit }
        case 'CLEAR':
            return { ...initialState, list: state.list }
        case 'LOAD':
            return { ...state, ...payload }
        case 'PAGE_CHANGED':
            return { ...state, page: payload }
        default:
            return state;
    }
}