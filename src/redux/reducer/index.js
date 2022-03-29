import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import route from './navReducer';

export default combineReducers({
  movieState: movieReducer,
  routeState: route.routeReducer,
});
