import { combineReducers } from "redux";
import menu from "./menu/reducer";
import notify from './notify/reducer';

const rootReducer = combineReducers({
  menu,
  notify
})


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 