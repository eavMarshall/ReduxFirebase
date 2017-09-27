import Store from '../../Store/Store'
import AllTypes from '../../Store/AllTypes'
import AllViews from '../../Views/AllViews'

//-----------------------------------------------------------------------------------
const AppReducer_Login_False_IsReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    return true == Store.getState().AppReducer.setIsFireBaseLoggedIn ? false : true;
}
export { AppReducer_Login_False_IsReady_To_True }
//-----------------------------------------------------------------------------------
const AppReducer_Login_False_IsFireBaseReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseReady, true));

    return true == Store.getState().AppReducer.isFireBaseReady ? true : false;
}
export { AppReducer_Login_False_IsFireBaseReady_To_True }
//-----------------------------------------------------------------------------------
const AppReducer_Login_False_SetSelectedPage_To_Unknown_Module = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    var page = 'I changed the page while logged out';
    Store.dispatch(AllTypes.getType(AllTypes.App.setSelectedPage, page));

    return page == Store.getState().AppReducer.selectedPage ? false : true;
}
export { AppReducer_Login_False_SetSelectedPage_To_Unknown_Module }
//-----------------------------------------------------------------------------------
const AppReducer_Login_False_SetSelectedPage_To_Known_Module = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, false));
    var page = AllViews.Home;
    Store.dispatch(AllTypes.getType(AllTypes.App.setSelectedPage, page));

    return page == Store.getState().AppReducer.selectedPage ? false: true;
}
export { AppReducer_Login_False_SetSelectedPage_To_Known_Module }
//-----------------------------------------------------------------------------------