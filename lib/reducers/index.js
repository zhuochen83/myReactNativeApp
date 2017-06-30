  import { combineReducers } from 'redux'
  import jobsReducer from './Jobs'
  import navReducer from './Navigation'
  
  export default combineReducers({
    jobs:jobsReducer,
    nav: navReducer
  })