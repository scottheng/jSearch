import { connect } from 'react-redux';
import Meetup from './meetup';
import { fetchMeetups } from '../../actions/meetup_actions';
import { meetupSelector } from '../../selectors/meetup_selector';

const mapStateToProps = (state, ownProps) => {
  let meetupInfo = meetupSelector(state.meetup.data);
  let meet = [];
  
  Object.keys(meetupInfo).forEach( (date) => {
    let dateObject = {};
    dateObject[date] = meetupInfo[date];
    meet.push(dateObject);
  });

  return {
    eventbrite: state.eventbrite,
    meetups: meet
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMeetups: (request) => dispatch(fetchMeetups(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetup);
