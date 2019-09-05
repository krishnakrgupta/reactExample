import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'; 

//let applyMiddleware = [thunkMiddleware];


export const stateStore= () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
        )
}

export default stateStore ;