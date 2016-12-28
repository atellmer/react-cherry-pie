/** @flow */
import type { UserType } from './user';
import type { MessageType } from './message';


type DialogItemType = {
  id: string,
  user: UserType,
  message: MessageType
}

export type { DialogItemType };
