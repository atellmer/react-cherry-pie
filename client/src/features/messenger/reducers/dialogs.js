/** @flow */
import { actionTypes } from '../actions/dialogs';
import type { DialogType } from '@/features/messenger';


type State = {
  dialogItems: Array<DialogType>,
  term: string
}

const initialState = {
  dialogItems: [],
  term: ''
};

export default function dialogs(state: State = initialState, action: any) {
  switch (action.type) {
  case actionTypes.FETCH_DIALOGS: {
    const { payload: { dialogItems } } = action;

    return {
      ...state,
      dialogItems
    };
  }

  case actionTypes.FILTER_DIALOGS: {
    const { payload: { term } } = action;

    return {
      ...state,
      term
    };
  }

  default:
    return state;
  }
}
