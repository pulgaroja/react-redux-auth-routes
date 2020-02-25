import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ currentUser, ...props }) => {
	return currentUser ? <Route {...props} /> : <Redirect to="/login" />
}

const RoleRoute = ({ currentUser, roles, ...props }) => {
	return currentUser && currentUser.roles.some(role => roles.includes(role)) ? (
		<Route {...props} />
	) : (
		<Redirect to="/dashboard" />
	)
}

const AppRoute = ({ currentUser, authOnly = false, roles, ...props }) => {
	const handleRoute = () => {
		if (authOnly && !roles) {
			return <AuthRoute currentUser={currentUser} {...props} />
		}
		if (authOnly && roles) {
			return <RoleRoute currentUser={currentUser} roles={roles} {...props} />
		}
		return <Route {...props} />
	}
	return handleRoute()
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(AppRoute)
