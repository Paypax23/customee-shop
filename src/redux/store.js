
import { rootReducer } from "./reducers/allReducers";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer:rootReducer,
});