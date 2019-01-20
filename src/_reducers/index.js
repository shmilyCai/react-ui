import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'


// rootReducer  此处是rootReducer的来源，合并各个reducers
export default combineReducers({
  todos,
  visibilityFilter
})