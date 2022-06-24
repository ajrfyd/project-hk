import { Dispatch } from 'redux';
import { NotifyAction } from './types';

// export const NOTIFY = 'notify_NOTIFY' as const;
export const ENQ_NOTIFICATION = 'notify_ENQ_NOTI' as const;
export const DEQ_NOTIFICATION = 'notify_DEQ_NOTI' as const;

export const notify = (msg: string, disappearTime: number = 5000) => (dispatch: Dispatch<NotifyAction>) => {
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