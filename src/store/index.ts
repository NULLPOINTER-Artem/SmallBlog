import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from '@/store/reducers/PostSlice';

const rootReducer = combineReducers({
    postReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];