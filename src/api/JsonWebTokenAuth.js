import api from '../api'

const JsonWebTokenAuth = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const payload = {token}
    await api.authUser(payload)
    .then(res => {
        console.log(res.data)
        return(res.data)
    }).catch(error => {
        return(error.response.data.message)
    })
}

export default JsonWebTokenAuth