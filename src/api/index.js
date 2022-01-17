import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createUser = payload => api.post(`/user`, payload)
export const checkUserExistenceByUsername = username => api.get(`/user/${username}`)

export const getMarkdownFromPostName = postName => api.get(`/post/${postName}`)
export const getPosts = () => api.get(`/posts`)
export const createPost = payload => api.post(`/post`, payload) 

const apis = {
    createUser,
    checkUserExistenceByUsername,
    getMarkdownFromPostName,
    getPosts,
    createPost
}

export default apis