import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import usersReducer from "./usersReducer";
import {configureStore} from "@reduxjs/toolkit";
import coursesReducer from "./coursesReducer";


const persistConfig = {
    key: 'root',
    storage,
};


const reducers = combineReducers({ UsersPage: usersReducer, CoursesPage: coursesReducer });
const persistedReducer = persistReducer(persistConfig, reducers);


export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
