import { goHome, goProfile, goPlayGround } from "./actions";

export type StateType = {
  home: boolean;
  profile: boolean;
  playGround: boolean;
  // infinite: boolean;
}

export type DirType = 'home' | 'profile' | 'playground';

export type StateKeyType = {
  [key: string]: boolean;
}

export type ActionType =
| ReturnType<typeof goHome>
| ReturnType<typeof goProfile>
| ReturnType<typeof goPlayGround>