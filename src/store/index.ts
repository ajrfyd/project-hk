import { combineReducers } from "redux";
import menu from "./menu";


const rootReducer = combineReducers({
  menu,
})


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;