import axios from "axios";

const baseUrl = 'https://taskmanagements1.herokuapp.com/api'
const api = {
    call : () => {
        return axios.create({
            baseURL : baseUrl
        })
    }
}

export default api;