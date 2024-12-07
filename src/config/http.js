import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 360000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export { http }