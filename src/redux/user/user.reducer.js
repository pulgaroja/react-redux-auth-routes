import { LOGIN_SUCCESSFUL, LOGOUT } from '../actionTypes'

const INITIAL_STATE = {
	currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_SUCCESSFUL:
			return {
				...state,
				currentUser: action.payload,
			}
		case LOGOUT:
			return {
				...state,
				currentUser: null,
			}
		default:
			return state
	}
}

export default userReducer
