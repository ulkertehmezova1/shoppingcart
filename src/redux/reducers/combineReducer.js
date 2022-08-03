import { combineReducers } from "redux";
import { addToCardReducer } from "./addToCardReducer";

export const rootReducer = combineReducers({
    add:addToCardReducer
});