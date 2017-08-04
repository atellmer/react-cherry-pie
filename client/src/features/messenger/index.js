import { fetchDialogs, filterDialogs } from './actions/dialogs';
import { resizeDialogForm } from './actions/layout';
import messengerReducer from './reducers';
import type { DialogType, MessageType } from './types';


export {
  fetchDialogs,
  filterDialogs,
  resizeDialogForm,
  messengerReducer
};

export type {
  DialogType,
  MessageType
};
