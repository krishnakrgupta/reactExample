import axios from 'axios';

export const jsonPlaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default jsonPlaceholder ;
