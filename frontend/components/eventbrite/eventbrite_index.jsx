import React from 'react';
import { Link } from 'react-router';

class eventbriteIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchEvents();
	}

	render() {
		return (
			<div>
				<h1>Hello eventbrite</h1>
			</div>
		)
	}
}