/** @flow */
import type { UserType } from './user';


type MessageType = {
  id: string,
  value: {
    text: string
  },
  sender: UserType,
  status: {
    delivered: boolean,
    read: boolean,
    new: boolean
  },
  timestamp: Date
}

export type { MessageType };
