import { toast as toastify } from 'react-toastify';

export function toast(message, type) {
    toastify(message, {
        position: 'bottom-right',
        autoClose: 3000,
        type,
        theme: 'light'
    });
}