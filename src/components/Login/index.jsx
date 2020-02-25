import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../redux/user/user.actions'
import './Login.styles.css'
import { useHistory } from 'react-router'

const Login = ({ userLogin }) => {
	const [username, setUsername] = useState()
	const { push } = useHistory()
	const handleBlur = ({ target }) => {
		setUsername(target.value)
	}
	const handleLogin = e => {
		console.log('hi')
		e.preventDefault()
		const user = {
			name: username,
			// roles: ['developer', 'supporter'],
			roles: ['admin', 'developer', 'supporter'],
		}
		userLogin(user)
		push('/dashboard')
	}
	return (
		<div className="container">
			<h1>Welcome back</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label>Name</label>
					<input type="text" placeholder="Your Name" onBlur={handleBlur} />
				</div>
				<input type="submit" value="Log in" />
			</form>
		</div>
	)
}

export default connect(
	null,
	{ userLogin },
)(Login)
