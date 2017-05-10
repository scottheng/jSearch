import { connect } from 'react-redux';
import Meetup from './meetup';
import fetchMeetups from '../../actions/meetup_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    name: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetup);
