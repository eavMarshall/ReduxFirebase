import AllTypes from '../AllTypes'
import AllViews from '../../Views/AllViews'

const AppReducerDefaultState = {
    isAppReady: false,
    isFireBaseReady: false,
    isFireBaseLoggedIn: false,
    selectedPage: AllViews.Login
}

const AppReducer = (state = AppReducerDefaultState, action)=> {
    switch(action.type) {
        case AllTypes.RESET_STORE: return AppReducerDefaultState; break;
        case AllTypes.App.setIsAppReady:
            var copy = Object.assign({}, state);
            copy.isAppReady = action.payload === true ? true : false;
            return copy
        case AllTypes.App.setIsFireBaseReady:
            var copy = Object.assign({}, state);
            copy.isFireBaseReady = action.payload === true ? true : false;
            return copy
        case AllTypes.App.setIsFireBaseLoggedIn:
            var copy = Object.assign({}, state);
            copy.isFireBaseLoggedIn = action.payload === true ? true : false;
            return copy
        case AllTypes.App.setSelectedPage:
            var moduleExists = false;
            Object.keys(AllViews).forEach(function(key) {
                if (AllViews[key] == action.payload)
                    moduleExists = true;
            });
            if (moduleExists) {
                var copy = Object.assign({}, state);
                copy.selectedPage = action.payload;
                return copy
            }
        break;
    }
    return state
}

export default AppReducer;