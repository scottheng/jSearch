import React from 'react';
import SearchIndexContainer from '../search/search_index_container';
import MeetupContainer from '../meetup/meetup_container';
import EventBriteContainer from '../eventbrite/eventbrite_index_container';
// import NewEventbriteContainer from '../eventbrite/new_eventbrite_index_container';

class IndexPage extends React.Component {
	render() {
		return (
			<div className="flex-container flex-vertical">
				<SearchIndexContainer />
				<div className="flex-container flex-horizontal">
					<EventBriteContainer />
					<MeetupContainer />
				</div>
			</div>
		);
	}
}

export default IndexPage;
