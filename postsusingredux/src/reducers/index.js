import posts from '../reducers/posts.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    posts
});

export default rootReducer;