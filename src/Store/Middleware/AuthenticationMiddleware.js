/*
    Every action is assume to need authentication (signed in)
    Only those those in {logoutActions} will be allowed if user is
    not log in
*/
import AllTypes from '../AllTypes'

const logoutActions = [
    AllTypes.FireBase.signInWithRedirect
]

const AuthenticationMiddleware = (store)=> (next) => (action) => {
    if (!store.getState().AppStatusReducer.setIsFireBaseLoggedIn) {
        if (logoutActions.indexOf(action.type) > 0) {
            next(action)
        }
    } else {
        next(action)
    }
    next(action)
}

export default AuthenticationMiddleware