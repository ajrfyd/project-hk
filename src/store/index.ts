import { combineReducers } from "redux";
import menu from "./menu/reducer";
import notify from './notify/reducer';
import wordle from "./wordle/reducer";

const rootReducer = combineReducers({
  menu,
  notify,
  wordle
})


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 