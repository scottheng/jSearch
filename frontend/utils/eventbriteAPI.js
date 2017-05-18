import axios from 'axios';

export const fetchEvents = (searchQuery, zipcode, radius, date) => {
	return axios({
		method:'get',
		url:"https://www.eventbriteapi.com/v3/events/search/?token=FL7XRX7KTFAZN3TLOMLO",
		params: {
			q: "tech",
			"location.address": "94105",
			"location.within": "5mi"
		}
	});
};

export const fetchEventbriteEvent = () => {
  return axios({
    method:'get',
    url:"https://www.eventbriteapi.com/v3/events/33467242423/?token=FL7XRX7KTFAZN3TLOMLO"
  });
};
