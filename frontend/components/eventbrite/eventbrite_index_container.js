import { connect } from 'react-redux';

import { fetchEvents } from '../../actions/eventbrite_actions';

import eventbriteIndex from './eventbrite_index';

const mapStateToProps = (state, ownProps) => {
	return {
		events: state.events
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(eventbriteIndex);