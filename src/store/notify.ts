import { EnqType } from './type';
import { Dispatch, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from './index';
export const NOTIFY = 'notify_NOTIFY' as const;
export const ENQ_NOTIFICATION = 'notify_ENQ_NOTI' as const;
export const DEQ_NOTIFICATION = 'notify_DEQ_NOTI' as const;

// type ThunkDispatch<ReturnType = void> = ThunkAction<ReturnType, RootState, null, NotifyAction>
// type Dispatcher = ThunkDispatch<RootState, undefined, AnyAction>;

export const notify = (msg: string, disappearTime: number = 5000): any => async (dispatch: Dispatch) => {
  const uuid = Math.random(); 

  dispatch(enqNotify(msg, disappearTime, uuid));

  setTimeout(() => {
    dispatch(deqNotify());
  }, disappearTime);
};


export const enqNotify = (msg: string, disappearTime: number, uuid: number) => {
  return {
    type: ENQ_NOTIFICATION,
    payload: {
      msg,
      disappearTime,
      uuid
    }
  }
};

export const deqNotify = () => {
  return {
    type: DEQ_NOTIFICATION,
  }
};

type State = {
  notification: EnqType[];
}

const initialState: State = {
  notification: [],
}

type NotifyAction = 
  // | ReturnType<typeof notify>
  | ReturnType<typeof enqNotify>
  | ReturnType<typeof deqNotify>
;


const notifyReducer = (state: State = initialState, action: NotifyAction) => { 
  switch(action.type) {
    case ENQ_NOTIFICATION:
      return {
        ...state,
        notification: [...state.notification, action.payload]
      }
    case DEQ_NOTIFICATION:
      return {
        ...state,
        notification: [...state.notification.slice(1, state.notification.length - 1)]
      }
    default:
      return state;
  }
}; 

export default notifyReducer;