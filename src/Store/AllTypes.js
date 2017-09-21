import FireBase from './Types/FireBase'
import AppStatus from './Types/AppStatus'
import Notifications from './Types/Notifications'

const getType = (type, payload)=>{
    return { type: type, payload: payload }
}

const AllTypes = {
    getType: getType,
    FireBase: FireBase,
    AppStatus: AppStatus,
    Notifications: Notifications
}
export default AllTypes

