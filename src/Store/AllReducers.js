import { combineReducers } from 'redux'

import AppReducer from './Reducers/AppReducer'
import NotificationsReducer from './Reducers/NotificationsReducer'

const AllReducers = combineReducers({
  AppReducer,
  NotificationsReducer
})

export default AllReducers
