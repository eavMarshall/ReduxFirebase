import AllTypes from '../AllTypes'

const AppStatusReducerDefaultState = {
    isAppReady: false,
    isFireBaseReady: false,
    isFireBaseLoggedIn: false,
}

const AppStatusReducer = (state = AppStatusReducerDefaultState, action)=> {
    if (null === action || undefined == state)
        return AppStatusReducerDefaultState
    switch(action.type) {
        case AllTypes.AppStatus.isAppReady:
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