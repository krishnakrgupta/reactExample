import { FETCH_POSTS} from '../actions/post.actions';

const initialState = [];

export default(state = initialState, action) => {
    //console.log("hi=>",action.payload);
    switch(action.type){
        case FETCH_POSTS:
            return [...state, action.payload]
        default:
            return state;
    }
}