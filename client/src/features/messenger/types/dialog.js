/** @flow */
import type { UserType } from '@/features/common';
import type { MessageType } from './message';


type DialogType = {
  id: string,
  user: UserType,
  message: MessageType
}

export type { DialogType };
