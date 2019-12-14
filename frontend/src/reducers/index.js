import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import gridview from './gridview' 

export default combineReducers({
  visibilityFilter,
  gridview,

})

