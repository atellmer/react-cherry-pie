/** @flow */
import { actionTypes } from '../actions/dialogs';
import type { IDialog } from '@/shared/models/dialogItem';


type State = {
  dialogItems: Array<IDialog>,
  term: string
}

const initialState = {
  dialogItems: [],
  term: ''
};

export default function dialogs(state: State = initialState, action) {
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
