import React from 'react';
import SearchContainer from '../search/search_container';
import MeetupContainer from '../meetup/meetup_container';
import EventBriteContainer from '../eventbrite/eventbrite_index_container';

class IndexPage extends React.Component {
	render() {
		return (
			<div className="flex-container flex-vertical">
				<SearchContainer />
				<div className="flex-container flex-horizontal">
					<EventBriteContainer />
					<MeetupContainer />
				</div>
			</div>
		);
	}
}

export default IndexPage;