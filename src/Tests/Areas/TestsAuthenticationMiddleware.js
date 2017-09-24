import Store from '../../Store/Store'
import AllTypes from '../../Store/AllTypes'
import AllViews from '../../Views/AllViews'

//-----------------------------------------------------------------------------------
const AppReducer_Login_False_IsReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsAppReady, true));
    if (true == Store.getState().AppReducer.isAppReady) return true;

    return false;
}
export { AppReducer_Login_False_IsReady_To_True }
//-----------------------------------------------------------------------------------
const AppReducer_Login_False_IsFireBaseReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseReady, true));
    if (true == Store.getState().AppReducer.isFireBaseReady) return true;

    return false;
}
export { AppReducer_Login_False_IsFireBaseReady_To_True }
//-----------------------------------------------------------------------------------
const AppReducer_Login_False_SetSelectedPage_To_Unknown_Module = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsAppReady, true));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    if (true == Store.getState().AppReducer.isAppReady) {
        var page = 'I changed the page while logged out';
        Store.dispatch(AllTypes.getType(AllTypes.App.setSelectedPage, page));
        if (page == Store.getState().AppReducer.selectedPage) return false;
        return true;
    }

    return false;
}
export { AppReducer_Login_False_SetSelectedPage_To_Unknown_Module }
//-----------------------------------------------------------------------------------
const AppReducer_Login_False_SetSelectedPage_To_Known_Module = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsAppReady, true));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    if (true == Store.getState().AppReducer.isAppReady) {
        var page = AllViews.Home;
        Store.dispatch(AllTypes.getType(AllTypes.App.setSelectedPage, page));
        if (page == Store.getState().AppReducer.selectedPage) return false;
        return true;
    }

    return false;
}
export { AppReducer_Login_False_SetSelectedPage_To_Known_Module }
//-----------------------------------------------------------------------------------