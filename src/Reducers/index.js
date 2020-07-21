import { combineReducers } from 'redux';
import articlesReducer from './articles';
 
const rootReducer = combineReducers({
  articlesState: articlesReducer
});
 
export default rootReducer;