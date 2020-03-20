import {combineReducers} from "redux";
import user from "./user";
import course from "./course";
import checkout from "./checkout";

const reducers = combineReducers({
  user,
  course,
  checkout,
});

export default reducers;