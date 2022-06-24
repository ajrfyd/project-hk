import { State, NotifyAction } from './types';
import { ENQ_NOTIFICATION, DEQ_NOTIFICATION } from './actions';

const initialState: State = {
  notification: [],
}

const notifyReducer = (state: State = initialState, action: NotifyAction): State => { 
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