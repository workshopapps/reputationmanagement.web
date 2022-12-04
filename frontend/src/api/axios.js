import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})
export const ApiPrivate = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
    headers: {
        "Accept": "*/*",
        'Content-Type': 'application/json',
    }
})

export default Api;
