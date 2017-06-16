/** @flow */
import type { IUser } from './user';
import type { IMessage } from './message';


type IDialog = {
  id: string,
  user: IUser,
  message: IMessage
}

export type { IDialog };
