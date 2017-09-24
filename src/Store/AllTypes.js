import FireBase from './Types/FireBase'
import App from './Types/App'
import Notifications from './Types/Notifications'

const getType = (type, payload)=>{
    return { type: type, payload: payload }
}

const AllTypes = {
    RESET_STORE: '@ALLSTORES.RESET',
    getType: getType,
    FireBase: FireBase,
    App: App,
    Notifications: Notifications
}
export default AllTypes

