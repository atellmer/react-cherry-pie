import * as types from '../constants/ActionTypes';


const initialState = {
	messagePanel: {
		height: 0
	}
};

export default function layout(state = initialState, action) {
	switch (action.type) {
	case types.RECIVE_MESSAGE_PANEL_HEIGHT:
		return {
			...state,
			messagePanel: {
				height: action.payload.height
			}
		};

	default:
		return state;
	}
}
