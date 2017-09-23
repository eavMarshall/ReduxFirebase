import AllTypes from '../AllTypes'

const NotificationsReducerDefaultState = {
    errors: {}
}

const ErrorTemplate = {
    type: 'Popup',
    kind: 'Error',
    message: 'Undefined error'
}

const NotificationsReducer = (state = NotificationsReducerDefaultState, action)=> {
    if (null === action || undefined == state)
        return NotificationsReducerDefaultState
    switch(action.type) {
        case AllTypes.RESET_STORE: return NotificationsReducerDefaultState;
        case AllTypes.Notifications.AddNotification :
            var copy = Object.assign({}, state);
            var error = Object.assign({}, ErrorTemplate);
            error.type = action.payload.type || error.type;
            error.kind = action.payload.kind || error.kind;
            error.message = action.payload.message || error.message;
            copy.errors[new Date().getTime()] = error;
            return copy
    }
    return state
}

export default NotificationsReducer;