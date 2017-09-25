import AllTypes from '../AllTypes'
import AllViews from '../../Views/AllViews'

const LoginReducerDefaultState = {
    isLoggingIn: false
}

const LoginReducer = (state = LoginReducerDefaultState, action)=> {
    switch(action.type) {
        case AllTypes.RESET_STORE: return LoginReducerDefaultState; break;
        case AllTypes.Login.setIsLoggingIn:
        var copy = Object.assign({}, state);
        copy.isLoggingIn = action.payload === true ? true : false;
        return copy
    }
    return state
}

export default LoginReducer;