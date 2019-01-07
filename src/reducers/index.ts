import { combineReducers } from "redux";
import global from "./global";
import user from "./user";
import file from "./file";

export default combineReducers({ global, user, file });
