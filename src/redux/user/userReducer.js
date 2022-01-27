import { LOGIN_USER } from "./userTypes";
import JsonWebTokenAuth from "../../api/JsonWebTokenAuth";

const initialState = {
    username: null,
    isAdmin: false,
    isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: return {
            ...state,
            username: action.username,
            isAdmin: action.isAdmin,
            isLoggedIn: action.isLoggedIn
        }
        default: return state
    }
}

export default userReducer