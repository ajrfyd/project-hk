import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { Dispatch, ActionCreator, Action, AnyAction } from 'redux';
import { NotifyAction, EnqType } from './types';
import { createAsyncAction } from 'typesafe-actions'
import { AxiosError } from "axios";


export const NOTIFY = 'notify_NOTIFY' as const;
export const ENQ_NOTIFICATION = 'notify_ENQ_NOTI' as const;
export const DEQ_NOTIFICATION = 'notify_DEQ_NOTI' as const;


// export type AppThunk = ActionCreator<ThunkAction<void, EnqType, null, Action<NotifyAction>>>
// type Thunk = ThunkAction<Promise<any>, State, unknown, NotifyAction>
// export const notify = (msg: string, disappearTime: number = 5000): any => (dispatch: Dispatch<NotifyAction>) => {
// export const notify = (msg: string, disappearTime: number = 5000): ThunkAction<void, RootState, unknown, AnyAction> => dispatch => {
export const notify = (msg: string, disappearTime: number = 5000): any => async (dispatch: Dispatch<NotifyAction>) => {
  dispatch({ type: NOTIFY });
  const uuid = Math.random(); 
  
  try {
    dispatch(enqNotify(msg, disappearTime, uuid));
  
    setTimeout(() => {
      dispatch(deqNotify());
    }, disappearTime);
  } catch(e) {
    throw new Error('Error!')
  }
};

export const reqNotify = () => ({ type: NOTIFY });

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


