import axios from 'axios';

export const fetchEvents = () => {
	return axios({
		method:'get',
		url:"https://www.eventbriteapi.com/v3/events/search/?token=FL7XRX7KTFAZN3TLOMLO",
		params: {
			q: "tech"
		}
	}).then(response => console.log(response.data.events));
};
