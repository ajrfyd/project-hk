const GO_HOME = 'menu/GO_HOME' as const;
const GO_PROFILE = 'menu/GO_PROFILE' as const;
// const INFINITE = 'menu/INFINITE';



export const goHome = () => ({ type: GO_HOME, payload: 'home' as const });
export const goProfile = () => ({ type: GO_PROFILE, payload: 'profile' as const });


type StateType = {
  home: boolean;
  profile: boolean;
  // infinite: boolean;
}

type ActionType =
| ReturnType<typeof goHome>
| ReturnType<typeof goProfile>
// | { type: 'menu/GO_HOME'}
// | { type: typeof GO_HOME }


const initialState: StateType = {
  home: true,
  profile: false,
}

type DirType = 'home' | 'profile';

interface DirT {
  [key: string]: boolean;
}

const changeDir = (state: DirT, type: DirType) => {
  const newState = { ...state };

  for(const key in newState) {
    if(key === type) newState[key] = true;
    else newState[key] = false;
  }
  return newState;
}

const menuReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GO_HOME:
      return changeDir(state, action.payload);
    case GO_PROFILE:
      return changeDir(state, action.payload);
    default: 
      return state;
  }
}

export default menuReducer;