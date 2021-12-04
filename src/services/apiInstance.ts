import { default as axios } from 'axios';
export const baseURL = 'https://api.napster.com/v2.2';
const apiInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        apikey: 'YWU2ZWFkOGItOGNiYi00MTFjLTkyYmItZjkyZTM3MmNmNzg3'
    }
});
export default apiInstance;
