import AllTypes from '../AllTypes'

const logoutActions = [
    AllTypes.FireBase.signInWithRedirect,
    AllTypes.App.setIsAppReady,
    AllTypes.App.setIsFireBaseReady,
    AllTypes.App.setIsFireBaseLoggedIn,
    AllTypes.RESET_STORE
]

const AuthenticationMiddleware = (store)=> (next) => (action) => {
    if (!store.getState().AppReducer.isFireBaseLoggedIn) {
        if (logoutActions.indexOf(action.type) > 0) {
            next(action)
        } else {
            console.warn("User is logged out action " + action.type + " was blocked");
        }
    } else {
        next(action)
    }
}

export default AuthenticationMiddleware