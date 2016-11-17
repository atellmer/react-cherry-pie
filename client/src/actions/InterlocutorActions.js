/** @flow */
import * as types from '../constants/ActionTypes';

type changeCurrentInterlocutorAction = {
	type: string,
	payload: {
		userId: number
	}
}

export function changeCurrentInterlocutor(userId: number): changeCurrentInterlocutorAction {
	return {
		type: types.CHANGE_CURRENT_INTERLOCUTOR,
		payload: {
			userId
		}
	};
}
