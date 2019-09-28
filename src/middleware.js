import {USER_LOGIN_SUCCESS} from "./actions/constants";
import {requests} from "./agent";

export const tokenMiddleWare = store => next => action => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
        window.localStorage.setItem('jwtToken', action.token);
        window.localStorage.setItem('userID', action.userId);
        requests.setToken(action.token);
        break;
        default:
    }
    next(action);
}