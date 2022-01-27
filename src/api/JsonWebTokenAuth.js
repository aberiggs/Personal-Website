import api from '../api'

const JsonWebTokenAuth = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const payload = {token}
    const response = await api.authUser(payload)
    .then(res => {
        return(res.data)
    }).catch(error => {
        return(error.response.data.message)
    })

    return response;
}

export default JsonWebTokenAuth