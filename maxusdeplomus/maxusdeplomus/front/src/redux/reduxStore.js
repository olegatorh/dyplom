import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    UsersPage: usersReducer,
})


const store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)))
window.__store__ = store

export default store