import { LOGIN_SUCCESSFUL, LOGOUT } from '../actionTypes'

export const userLogin = user => ({
	type: LOGIN_SUCCESSFUL,
	payload: user,
})

export const userLogout = () => ({
	type: LOGOUT,
	payload: null,
})
