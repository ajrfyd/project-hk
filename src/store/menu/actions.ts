import { StateKeyType, DirType } from './types';

import { utils } from '../utils/utils';

export const list = ['home', 'profile', 'playground']

const actionStr = utils.makeActionStr(list);
const { home, profile, playground } = actionStr;

export const GO_HOME = home;
export const GO_PROFILE = profile;
export const GO_PLAYGROUND = playground;
// export const GO_HOME = 'menu/GO_HOME' as const;
// export const GO_PROFILE = 'menu/GO_PROFILE' as const;
// export const GO_PLAYGROUND = 'menu/GO_PLAYGROUND' as const;

export const goHome = () => ({ type: GO_HOME, payload: 'home' as const});
export const goProfile = () => ({ type: GO_PROFILE, payload: 'profile' as const });
export const goPlayGround = () => ({ type: GO_PLAYGROUND, payload: 'playground' as const });

export const changeDir = (state: StateKeyType, type: DirType) => {
  const newState = { ...state };

  for(const key in newState) {
    if(key === type) newState[key] = true;
    else newState[key] = false;
  }
  return newState;
}