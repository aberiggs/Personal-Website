import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createUser = payload => api.post(`/user`, payload)
export const checkUserExistenceByUsername = username => api.get(`/user/${username}`)

const apis = {
    createUser,
    checkUserExistenceByUsername,
}

export default apis