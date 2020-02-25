import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/user/user.actions'
import './Header.styles.css'

const Header = ({ currentUser, userLogout }) => {
	const { push } = useHistory()
	const handleSessionToggle = () => {
		if (currentUser) {
			userLogout()
		} else {
			push('/login')
		}
	}
	return (
		<header
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<h3>{(currentUser && currentUser.name + "'s") || 'Some'} App</h3>
			<nav>
				<Link to="/">Landing</Link>
				{currentUser && <Link to="/dashboard">Dashboard</Link>}
				{currentUser && <Link to="/admin">Admin</Link>}
			</nav>
			{!currentUser && <button onClick={handleSessionToggle}>Log In</button>}
			{currentUser && <button onClick={handleSessionToggle}>Log Out</button>}
		</header>
	)
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
})

export default connect(
	mapStateToProps,
	{ userLogout },
)(Header)
