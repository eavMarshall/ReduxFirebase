import { combineReducers } from 'redux'

import AppReducer from './Reducers/AppReducer'
import NotificationsReducer from './Reducers/NotificationsReducer'
import LoginReducer from './Reducers/LoginReducer'

const AllReducers = combineReducers({
  AppReducer,
  NotificationsReducer,
  LoginReducer
})

export default AllReducers
