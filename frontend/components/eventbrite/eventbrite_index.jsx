import React from 'react';
import { Link } from 'react-router';
import { timeStampParser } from '../../utils/timestamp_parser';

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
		console.log(this.props.events);
    if(this.props.events.length === 0){
      return <div>Loading...</div>;
    }

		return (
			<div>
				<h1>Hello eventbrite</h1>
				<ul>
					{this.props.events.map((event, idx) => {
						const datetime = timeStampParser(event.start.local);
						return (
							<li key={idx}>
								<h4>{event.name.text} {datetime[0]} {datetime[1]}</h4>
								<h4>{event.url}</h4>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

}

export default eventbriteIndex;
