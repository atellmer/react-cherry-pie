/** @flow */
import { actionTypes } from '../actions/dialogs';
import type { IDialog } from '@/shared/models/dialogItem';


type State = {
  dialogs: Array<IDialog>,
  filteredDialogs: Array<IDialog>
}

const initialState = {
  dialogs: [],
  filteredDialogs: []
};

export default function dialogs(state: State = initialState, action) {
  switch (action.type) {

  case actionTypes.FETCH_DIALOGS: {
    return {
      ...state,
      dialogs: action.payload.dialogs,
      filteredDialogs: action.payload.dialogs
    };
  }

  case actionTypes.FILTER_DIALOGS: {
    const { payload: { filteredDialogs } } = action;

    return {
      ...state,
      filteredDialogs
    };
  }

  default:
    return state;
  }
}
