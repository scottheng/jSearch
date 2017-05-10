import { connect } from 'react-redux';
import Meetups from './meetups';
import fetchMeetups from '../../utils/meetupAPI';


const mapStateToProps = (state, ownProps) => ({
  name: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetups);
