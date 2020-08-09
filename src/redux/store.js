import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./../redux/reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    counter:counterReducer,
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store