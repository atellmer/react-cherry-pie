/** @flow */
import * as types from '../constants/ActionTypes';

type changeMessagePanelHeightAction = {
	type: string,
	payload: {
		height: number
	}
}

export function changeMessagePanelHeight(height: number): changeMessagePanelHeightAction {
	return {
		type: types.CHANGE_MESSAGE_PANEL_HEIGHT,
		payload: {
			height
		}
	};
}
