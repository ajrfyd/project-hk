import { StateType, ActionType } from "./types";
import { GO_HOME, GO_PLAYGROUND, GO_PROFILE } from './actions';
import { changeDir } from './actions';

const initialState: StateType = {
  home: true,
  profile: false,
  playGround: false,
}

const menuReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GO_HOME:
      return changeDir(state, action.payload);
    case GO_PROFILE:
      return changeDir(state, action.payload);
    case GO_PLAYGROUND:
      return changeDir(state, action.payload);
    default: 
      return state;
  }
}

export default menuReducer;