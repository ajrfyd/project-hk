import { StateType, ActionType } from "./types";
import { GO_HOME, GO_PLAYGROUND1, GO_PROFILE, changeDir } from './actions';
// import { changeDir } from './actions';
import { utils } from "../utils/utils";

const initialState: StateType = {
  home: true,
  profile: false,
  playground1: false,
}

const menuReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GO_HOME:
      return utils.changeDir(state, action.payload);
    case GO_PROFILE:
      return utils.changeDir(state, action.payload);
    case GO_PLAYGROUND1:
      return utils.changeDir(state, action.payload);
    default: 
      return state;
  }
}

export default menuReducer;