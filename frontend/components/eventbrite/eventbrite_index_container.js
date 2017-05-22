import { connect } from 'react-redux';

import { fetchEbEvents } from '../../actions/eventbrite_actions';

import eventbriteIndex from './eventbrite_index';

const mapStateToProps = (state, ownProps) => {
	// console.log(state);
	return {
		events: state.eventbrite
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchEbEvents: () => dispatch(fetchEbEvents())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(eventbriteIndex);