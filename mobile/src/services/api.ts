import Axios from 'axios'

const api = Axios.create({
    baseURL: 'http://192.168.1.165:3333'
})

export default api;