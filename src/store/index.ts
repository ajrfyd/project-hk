import { combineReducers } from "redux";
import menu from "./menu";
import notify from './notify';

const rootReducer = combineReducers({
  menu,
  notify
})


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 