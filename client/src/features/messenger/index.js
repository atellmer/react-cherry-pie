import MessengerView from './layouts/messenger';
import DialogDetail from './containers/dialogDetail';
import DialogPanelContainer from './containers/dialogPanel';
import DialogDetailDesktop from './components/dialogDetail/desktop';
import DialogDetailPhone from './components/dialogDetail/phone';
import DialogForm from './components/dialogForm';
import DialogPanelDesktop from './components/dialogPanel/desktop';
import DialogPanelPhone from './components/dialogPanel/phone';
import DialogTabs from './components/dialogTabs';
import DialogView from './components/dialogView';
import { fetchDialogs, filterDialogs } from './actions/dialogs';
import { resizeDialogForm } from './actions/layout';
import messengerReducer from './reducers';
import type { DialogType, MessageType } from './types';


export {
  MessengerView,
  DialogDetail,
  DialogPanelContainer,
  DialogDetailDesktop,
  DialogDetailPhone,
  DialogForm,
  DialogPanelDesktop,
  DialogPanelPhone,
  DialogTabs,
  DialogView,
  fetchDialogs,
  filterDialogs,
  resizeDialogForm,
  messengerReducer
};

export type {
  DialogType,
  MessageType
};
