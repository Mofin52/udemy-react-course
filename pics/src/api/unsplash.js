import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d280f6c8d93fdbd66a2665ec55627232fc43c2d8823e65b987ca3043aa50e873'
    }
});