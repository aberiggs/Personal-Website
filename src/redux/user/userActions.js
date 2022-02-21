import { LOGIN_USER } from "./userTypes";

const authenticateUser = (username, isAdmin, isLoggedIn) => {
    return {
        type: LOGIN_USER,
        username,
        isAdmin,
        isLoggedIn
    }
}

export { authenticateUser }