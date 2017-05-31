import React from 'react';
import SearchIndexContainer from '../search/search_index_container';
import MeetupContainer from '../meetup/meetup_container';
import EventBriteContainer from '../eventbrite/eventbrite_index_container';
// import NewEventbriteContainer from '../eventbrite/new_eventbrite_index_container';

class IndexPage extends React.Component {
	render() {
		return (
			<div className="flex-container flex-vertical">
				<div className="logo-m-meetarii">
					<h1 className="logo-m">M</h1>
					<h4 className="logo-meetarii">MEETARII</h4>
				</div>
				<SearchIndexContainer />
				<div className="events-container flex-container flex-horizontal">
					<EventBriteContainer />
					<MeetupContainer />
				</div>
			</div>
		);
	}
}

export default IndexPage;
