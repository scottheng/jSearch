import { connect } from 'react-redux';
import Meetup from './meetup';
import { fetchMeetups } from '../../actions/meetup_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    meetups: state.meetup.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetup);
