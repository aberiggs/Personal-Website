import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createUser = payload => api.post(`/user`, payload)
export const loginUser = payload => api.post(`/login`, payload)
export const authUser = payload => api.post(`/login/reauth`, payload)
export const checkUserExistenceByUsername = username => api.get(`/user/${username}`)

export const getMarkdownFromPostName = postName => api.get(`/post/${postName}`)
export const getPosts = () => api.get(`/posts`)
export const createPost = payload => api.post(`/post`, payload) 
export const editPost = payload => api.put(`/post/update`, payload) 
export const deletePost = payload => api.put(`/post/delete`, payload) 

const apis = {
    createUser,
    loginUser,
    authUser,
    checkUserExistenceByUsername,
    getMarkdownFromPostName,
    getPosts,
    createPost,
    editPost,
    deletePost
}

export default apis