import axios from 'axios';

const data = JSON.parse(localStorage.getItem('my_user')) || '';
export const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { 'Authorization': `token ${data.token}` }
});