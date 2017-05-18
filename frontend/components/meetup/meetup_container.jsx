import { connect } from 'react-redux';
import Meetup from './meetup';
import { fetchMeetups } from '../../actions/meetup_actions';
import { meetupDataSelector } from '../../reducers/meetup_selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    meetups: state.meetup.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetup);
