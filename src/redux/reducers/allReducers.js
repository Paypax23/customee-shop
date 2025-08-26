import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./shopReducer";
import { loginReducer } from "./loginReducer";
import { favoriteReducer } from "./favoriteReducer";

export const rootReducer = combineReducers({
    cart:cartReducer,
    login:loginReducer,
    favorite:favoriteReducer,
})