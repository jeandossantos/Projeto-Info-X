import axios from "axios";

const my_user = localStorage.getItem('my_user');

const initialState = {
    user: my_user ? JSON.parse(my_user) : {},
    isSignedIn: my_user ? true : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('my_user', JSON.stringify(action.payload));
            return { ...state, isSignedIn: true }
        case 'LOGOUT':
            localStorage.removeItem('my_user');
            delete axios.defaults.headers.common['Authorization'];
            return { user: {}, isSignedIn: false }
        default:
            return state;

    }
}