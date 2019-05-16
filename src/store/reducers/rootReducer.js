import authReducer from 'store/reducers/authReducer'
import pollsReducer from 'store/reducers/pollsReducer'
import alertReducer from 'store/reducers/alertReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  alert: alertReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

export default rootReducer
