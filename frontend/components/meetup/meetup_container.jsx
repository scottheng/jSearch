import { connect } from 'react-redux';
import Meetup from './meetup';
import fetchMeetups from '../../actions/meetup_actions';


const mapStateToProps = (state, ownProps) => ({
  name: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetup);
