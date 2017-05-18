import React from 'react';
import { Link } from 'react-router';

class eventbriteIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {events: []};
	}

	componentDidMount() {
		this.props.fetchEbEvents();
		if (this.props.events) {
			this.setState({events: this.props.events});
		}
	}

	render() {
    if(this.props.events.length === 0){
      return <div>Loading...</div>;
    }

		return (
			<div>
				<h1>Hello eventbrite</h1>
				<ul>
					{this.props.events.map((event, idx) => {
						return (
							<li key={idx}>{event.name.text}</li>
						);
					})}
				</ul>
			</div>
		);
	}

}

export default eventbriteIndex;