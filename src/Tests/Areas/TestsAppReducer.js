import Store from '../../Store/Store'
import AllTypes from '../../Store/AllTypes'
import AllViews from '../../Views/AllViews'

//-----------------------------------------------------------------------------------
const AppReducer_IsFireBaseReady_To_True = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseReady, true));
    if (true == Store.getState().AppReducer.isFireBaseReady) return true;

    return false;
}
export { AppReducer_IsFireBaseReady_To_True }
//-----------------------------------------------------------------------------------
const AppReducer_IsFireBaseReady_To_False = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));
    return false == Store.getState().AppReducer.isAppReady ? true: false;
}
export { AppReducer_IsFireBaseReady_To_False }
//-----------------------------------------------------------------------------------
const AppReducer_SetSelectedPage_To_Unknown_Module = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));

    var page = 'I changed the page while logged out';
    Store.dispatch(AllTypes.getType(AllTypes.App.setSelectedPage, page));
    return page == Store.getState().AppReducer.selectedPage ? false : true;

    return false;
}
export { AppReducer_SetSelectedPage_To_Unknown_Module }
//-----------------------------------------------------------------------------------
const AppReducer_SetSelectedPage_To_Known_Module = ()=>{
    Store.dispatch(AllTypes.getType(AllTypes.App.setIsFireBaseLoggedIn, true));

    var page = AllViews.Home;
    Store.dispatch(AllTypes.getType(AllTypes.App.setSelectedPage, page));
    return page == Store.getState().AppReducer.selectedPage ? true : false;
}
export { AppReducer_SetSelectedPage_To_Known_Module }
//-----------------------------------------------------------------------------------