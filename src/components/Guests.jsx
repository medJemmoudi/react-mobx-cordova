import React from 'react';
import {observer} from 'mobx-react';
import Guest from './Guest.jsx'
import GuestEntry from './GuestEntry.jsx'

@observer
export default class Guests extends React.Component {

	render() {
		const {guestStore} = this.props.route

		return (
			<div>
				<div>The Guests :</div>
				{guestStore.guests.map((guest) => (
						<Guest key={guest.guest} guest={guest}/>
					)
				)}
				<GuestEntry guestStore={guestStore}/>
		</div>
		)
	}
}
