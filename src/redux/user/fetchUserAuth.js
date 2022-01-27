import { authenticateUser } from "./userActions";
import JsonWebTokenAuth from "../../api/JsonWebTokenAuth";


const fetchUserAuth = token => {
    return async dispatch => {
        const res = await JsonWebTokenAuth()
        if (res.jwtData) {
            dispatch(authenticateUser(res.jwtData.username, res.jwtData.isAdmin, true))
        } else {
            dispatch(authenticateUser(null, false, false))
        }
            
    }
}

export default fetchUserAuth