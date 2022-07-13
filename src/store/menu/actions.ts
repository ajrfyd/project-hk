import { StateKeyType, DirType } from './types';

import { utils } from '../utils/utils';

export const list = ['home', 'profile', 'playground1']

const actionStr = utils.makeActionStr(list);
const { home, profile, playground1 } = actionStr;

export const GO_HOME = home;
export const GO_PROFILE = profile;
export const GO_PLAYGROUND1 = playground1;

export const goHome = () => ({ type: GO_HOME, payload: 'home' as const});
export const goProfile = () => ({ type: GO_PROFILE, payload: 'profile' as const });
export const goPlayGround1 = () => ({ type: GO_PLAYGROUND1, payload: 'playground1' as const });

export const changeDir = (state: StateKeyType, type: DirType) => {
  const newState = { ...state };

  for(const key in newState) {
    if(key === type) newState[key] = true;
    else newState[key] = false;
  }
  return newState;
}