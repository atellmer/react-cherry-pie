/** @flow */
import type { IUser } from './user';


type IMessage = {
  from: IUser,
  to: IUser,
  value: {
    text: string
  },
  status: {
    delivered: boolean,
    read: boolean,
    new: boolean
  };
  timestamp: Date
}

export type { IMessage };
