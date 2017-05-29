import axios from 'axios';

export const fetchEvents = (params) => {
	return axios({
		method:'get',
		url:"https://www.eventbriteapi.com/v3/events/search/?token=FL7XRX7KTFAZN3TLOMLO",
		params: {
			q: params.input,
			"location.address": params.zipcode,
			"location.within": `${params.radius}mi`,
			sort_by: "date",
			"start_date.range_start": `${params.startDate.toISOString().split(".")[0]}`,
			"start_date.range_end": `${params.endDate.toISOString().split(".")[0]}`
		}
	});
};

export const fetchEventbriteEvent = () => {
  return axios({
    method:'get',
    url:"https://www.eventbriteapi.com/v3/events/33467242423/?token=FL7XRX7KTFAZN3TLOMLO"
  });
};

// export const fetchEvents = (params) => {
// 	return axios({
// 		method:'get',
// 		url:"https://www.eventbriteapi.com/v3/events/search/?token=FL7XRX7KTFAZN3TLOMLO",
// 		params: {
// 			q: "tech",
// 			"location.address": "94015",
// 			"location.within": `10mi`,
// 			sort_by: "date",

// 		}
// 	});
// };
