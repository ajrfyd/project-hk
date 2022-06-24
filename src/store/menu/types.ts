import { goHome, goProfile, goPlayGround } from "./actions";
import { utils } from '../utils/utils';
import { list } from "./actions";

export type StateKeyType = {
  [key: string]: boolean;
}

const menuType = utils.makeInitialType(list);

export type StateType = {
  home: boolean;
  profile: boolean;
  playground: boolean;
}



export type DirType = 'home' | 'profile' | 'playground';

export type ActionType =
| ReturnType<typeof goHome>
| ReturnType<typeof goProfile>
| ReturnType<typeof goPlayGround>