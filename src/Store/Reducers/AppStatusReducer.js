import AllTypes from '../AllTypes'

const AppStatusReducerDefaultState = {
    isAppReady: false,
    isFireBaseReady: false,
    isFireBaseLoggedIn: false,
}

const AppStatusReducer = (state = AppStatusReducerDefaultState, action)=> {
    switch(action.type) {
        case AllTypes.RESET_STORE: return AppStatusReducerDefaultState; break;
        case AllTypes.AppStatus.setIsAppReady:
            var copy = Object.assign({}, state);
            copy.isAppReady = action.payload === true ? true : false;
            return copy
        case AllTypes.AppStatus.setIsFireBaseReady:
            var copy = Object.assign({}, state);
            copy.isFireBaseReady = action.payload === true ? true : false;
            return copy
        case AllTypes.AppStatus.setIsFireBaseLoggedIn:
            var copy = Object.assign({}, state);
            copy.isFireBaseLoggedIn = action.payload === true ? true : false;
            return copy
    }
    return state
}

export default AppStatusReducer;