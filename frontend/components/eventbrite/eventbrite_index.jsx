import React from 'react';
import { Link } from 'react-router';
import { timeStampParser } from '../../utils/timestamp_parser';

class eventbriteIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {events: []};
	}


	render() {
		// console.log(this.props.events);
    if(this.props.events.length === 0){
      return <div>Loading...</div>;
    }

		return (
			<div className="events-index flex-container flex-vertical">
				<h1 className="align-self-center">Eventbrite Events</h1>
				<ul className="events-list">
					{this.props.events.map((event, idx) => {
						const datetime = timeStampParser(event.start.local);
						return (
							<li key={idx} className="events-item flex-container flex-horizontal">
								<div className="events-left">
									<h4>Date: {datetime[0]}</h4>
									<h4>Time: {datetime[1]}</h4>
								</div>
								<div className="events-right">
									<h3>{event.name.text}</h3>
								</div>
								{/*<a href={event.url}>Go to Page</a>*/}
								{/*<h4>{event.url}</h4>*/}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

}

export default eventbriteIndex;
