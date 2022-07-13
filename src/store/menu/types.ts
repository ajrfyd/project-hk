import { goHome, goProfile, goPlayGround1 } from "./actions";
import { utils } from '../utils/utils';
import { list } from "./actions";

export type StateKeyType = {
  [key: string]: boolean;
}

const menuType = utils.makeInitialType(list);

export type StateType = {
  home: boolean;
  profile: boolean;
  playground1: boolean;
}



export type DirType = 'home' | 'profile' | 'playground1';

export type ActionType =
| ReturnType<typeof goHome>
| ReturnType<typeof goProfile>
| ReturnType<typeof goPlayGround1>