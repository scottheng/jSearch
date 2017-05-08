import axios from 'axios';

export const fetchMeetups = () => {
	return axios({
		method:'get',
		url:"https://api.meetup.com/2/open_events/?key=682f5e4b26d16d31377034866e33",
    params:{
      city: "San Francisco",
      country: "us",
      state: "ca",
      text: "tech AND code"
    }
	}).then(response => console.log(response.data));
};

export const fetchMeetupPicture = () => {
  return axios({
    method: 'get',
    url: 'https://api.meetup.com/Consciousness-Hacking-San-Francisco/photos/?key=682f5e4b26d16d31377034866e33',
    // params:{
    //   event_id: 239557432,
    //   urlname: "Bootcamp-Curious"
    // }
  }).then(response => console.log(response));
};
