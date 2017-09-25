import FireBase from './Types/FireBase'
import App from './Types/App'
import Notifications from './Types/Notifications'
import Login from './Types/Login'

const getType = (type, payload)=>{
    return { type: type, payload: payload }
}

const AllTypes = {
    RESET_STORE: '@ALLSTORES.RESET',
    getType: getType,
    FireBase: FireBase,
    App: App,
    Notifications: Notifications,
    Login: Login
}
export default AllTypes

