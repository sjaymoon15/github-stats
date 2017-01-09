import { combineReducers } from 'redux';
import ReposReducer from './reducer_repos';
import ActivityReducer from './reducer_activity';

const rootReducer = combineReducers({
  repos: ReposReducer,
  activity: ActivityReducer
});

export default rootReducer;
