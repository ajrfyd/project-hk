import { reqNotify, enqNotify, deqNotify } from "./actions";

export type EnqType = {
  msg: string;
  disappearTime: number;
  uuid?: number;
};

export type State = {
  notification: EnqType[];
};

export type NotifyAction = 
  | ReturnType<typeof reqNotify>
  | ReturnType<typeof enqNotify>
  | ReturnType<typeof deqNotify>
;