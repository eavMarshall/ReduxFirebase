import { combineReducers } from 'redux'

import AppStatusReducer from './Reducers/AppStatusReducer'
import NotificationsReducer from './Reducers/NotificationsReducer'

const AllReducers = combineReducers({
  AppStatusReducer,
  NotificationsReducer
})

export default AllReducers
