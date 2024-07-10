import { combineReducers } from "@reduxjs/toolkit";
import Auth_Reducer from "./authReducer";
import Project_Reducer from "./projectReducer";
export const rootReducer = combineReducers({
  AUTH: Auth_Reducer,
  Project: Project_Reducer,
});
