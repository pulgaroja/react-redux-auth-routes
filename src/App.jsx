import React, { Fragment } from 'react'
import { Switch } from 'react-router'

import Admin from './components/Admin'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Landing from './components/Landing'
import Login from './components/Login'
import AppRoute from './router'

import './styles.css'

export default function App() {
	return (
		<Fragment>
			<Header />
			<Switch>
				<AppRoute exact path="/" component={Landing} />
				<AppRoute path="/login" component={Login} />
				<AppRoute authOnly roles={['admin']} path="/admin" component={Admin} />
				<AppRoute authOnly path="/dashboard" component={Dashboard} />
			</Switch>
		</Fragment>
	)
}
