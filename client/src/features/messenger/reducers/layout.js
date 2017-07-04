/** @flow */
import { actionTypes } from '../actions/layout';


type State = {
  dialogForm: {
    height: number
  }
}

const initialState = {
  dialogForm: {
    height: 0
  }
};

function layout(state: State = initialState, action: any) {
  switch (action.type) {
  case actionTypes.RESIZE_DIALOG_FORM: {
    const { payload: { height } } = action;

    return {
      ...state,
      dialogForm: {
        height
      }
    };
  }
  default:
    return state;
  }
}

export default layout;
