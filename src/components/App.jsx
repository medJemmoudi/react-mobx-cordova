import CSSModules from 'react-css-modules'
import {container, jumbotron, buttons} from 'bootstrap-css'
import React from 'react'
import ReactDOM from 'react-dom'
import DevTool from 'mobx-react-devtools'
import {observer} from 'mobx-react'

import About from './About.jsx'
import NavigationBar from './NavigationBar.jsx'

import styles from '../style/App.css'
Object.assign(styles, jumbotron, container, buttons)

@observer
class App extends React.Component {
	render() {
		const {guestStore} = this.props.route
		return (
			<div className={styles.container}>
				
				<NavigationBar/>
				<div className={styles.appHeading}>
					<h1>Une application</h1>
					<p>Vous avez {guestStore.guestCount} visiteurs.</p>
					{this.props.children}
				</div>

			</div>
		);
	}
}

export default CSSModules(App, styles)
