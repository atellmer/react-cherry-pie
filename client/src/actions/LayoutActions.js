/** @flow */
import * as types from '../constants/ActionTypes';

type Action = {
	type: string,
	payload: {
		height: number
	}
}

export function changeMessagePanelHeight(height: number): Action {
	return {
		type: types.CHANGE_MESSAGE_PANEL_HEIGHT,
		payload: {
			height
		}
	};
}
