import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000
});

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
)

instance.interceptors.response.use(
    response => response,
    error => {
        console.log(error);
        alert(error.response.statusText);
    }
)

export default instance;