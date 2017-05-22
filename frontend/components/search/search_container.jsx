import { connect } from 'react-redux';
import Search from './search';
import { fetchMeetups } from '../../actions/meetup_actions';
import { fetchEbEvents } from '../../actions/eventbrite_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    meetups: state.meetup.data,
    eventbrite: state.eventbrite
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request)),
  fetchEbEvents: (request) => dispatch(fetchEbEvents(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
