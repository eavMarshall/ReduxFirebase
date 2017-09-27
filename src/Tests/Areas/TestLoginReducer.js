import Store from '../../Store/Store'
import AllTypes from '../../Store/AllTypes'
import AllViews from '../../Views/AllViews'

//-----------------------------------------------------------------------------------
const LoginReducer_setIsLoggingIn_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));
    Store.dispatch(AllTypes.getType(AllTypes.Login.setIsLoggingIn, true));
    if (true == Store.getState().LoginReducer.isLoggingIn) return true;

    return false;
}
export { LoginReducer_setIsLoggingIn_To_True }
//-----------------------------------------------------------------------------------
const LoginReducer_setIsLoggingIn_To_False = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));
    Store.dispatch(AllTypes.getType(AllTypes.Login.setIsLoggingIn, true));
    if (true == Store.getState().LoginReducer.isLoggingIn) {
        Store.dispatch(AllTypes.getType(AllTypes.Login.setIsLoggingIn, false));
        if (false == Store.getState().LoginReducer.isLoggingIn) return true;
    }

    return false;
}
export { LoginReducer_setIsLoggingIn_To_False }