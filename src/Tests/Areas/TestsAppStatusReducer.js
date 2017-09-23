import Store from '../../Store/Store'
import AllTypes from '../../Store/AllTypes'

//-----------------------------------------------------------------------------------
const AppStatusReducer_FireBaseLoggedIn_False_IsReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsAppReady, true));
    if (true == Store.getState().AppStatusReducer.isAppReady) return true;

    return false;
}
export { AppStatusReducer_FireBaseLoggedIn_False_IsReady_To_True }
//-----------------------------------------------------------------------------------
const AppStatusReducer_FireBaseLoggedIn_True_IsReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, true));
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsAppReady, true));
    if (true == Store.getState().AppStatusReducer.isAppReady) return true;

    return false;
}
export { AppStatusReducer_FireBaseLoggedIn_True_IsReady_To_True }
//-----------------------------------------------------------------------------------
const AppStatusReducer_FireBaseLoggedIn_False_IsFireBaseReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseReady, true));
    if (true == Store.getState().AppStatusReducer.isFireBaseReady) return true;

    return false;
}
export { AppStatusReducer_FireBaseLoggedIn_False_IsFireBaseReady_To_True }
//-----------------------------------------------------------------------------------
const AppStatusReducer_FireBaseLoggedIn_True_IsFireBaseReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseLoggedIn, true));
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsFireBaseReady, true));
    if (true == Store.getState().AppStatusReducer.isFireBaseReady) return true;

    return false;
}
export { AppStatusReducer_FireBaseLoggedIn_True_IsFireBaseReady_To_True }
//-----------------------------------------------------------------------------------
const AppStatusReducer_Login_True_IsReady_To_True_Then_To_False = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsAppReady, true));
    if (true == Store.getState().AppStatusReducer.isAppReady) {
        Store.dispatch(AllTypes.getType(AllTypes.AppStatus.setIsAppReady, false));
        if (false == Store.getState().AppStatusReducer.isAppReady) return true;
    }

    return false;
}
export { AppStatusReducer_Login_True_IsReady_To_True_Then_To_False }
//-----------------------------------------------------------------------------------