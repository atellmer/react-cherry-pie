import * as types from '../constants/ActionTypes';


export function reciveMessagePanelHeight(height) {
	return {
		type: types.RECIVE_MESSAGE_PANEL_HEIGHT,
		payload: {
			height
		}
	};
}
