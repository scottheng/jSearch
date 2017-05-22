import axios from 'axios';

export const fetchEvents = (searchQuery, zipcode, radius, startDate, endDate) => {
	return axios({
		method:'get',
		url:"https://www.eventbriteapi.com/v3/events/search/?token=FL7XRX7KTFAZN3TLOMLO",
		params: {
			q: {searchQuery},
			"location.address": {zipcode},
			"location.within": `${radius}mi`,
			sort_by: "date",
			"start_date.range_start": {startDate},
			"start_date.range_end": {endDate}
		}
	});
};

export const fetchEventbriteEvent = () => {
  return axios({
    method:'get',
    url:"https://www.eventbriteapi.com/v3/events/33467242423/?token=FL7XRX7KTFAZN3TLOMLO"
  });
};
