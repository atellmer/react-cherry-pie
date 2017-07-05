/** @flow */
import type { UserType } from '@/features/common';


type MessageType = {
  from: UserType,
  to: UserType,
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

export type { MessageType };
