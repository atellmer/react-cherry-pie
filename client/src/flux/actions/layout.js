/** @flow */
export const actionTypes = {
  RESIZE_DIALOG_FORM:  '[Layout] Resize Dialog Form'
};

type resizeDialogFormAction = {
  type: string,
  payload: {
    height: number
  }
}

export function resizeDialogForm(height: number): resizeDialogFormAction {
  return {
    type: actionTypes.RESIZE_DIALOG_FORM,
    payload: {
      height
    }
  };
}

export default {
  resizeDialogForm
};
