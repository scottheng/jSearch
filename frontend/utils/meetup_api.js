import axios from 'axios';


// export const fetchMeetups = (request) => {
// 	return axios({
// 		method:'get',
// 		url:"https://api.meetup.com/2/open_events/?key=682f5e4b26d16d31377034866e33",
//     params:{
//       city: request.city,
// 			zipcode: request.zipcode,
// 			radius: request.radius,
//       text: request.text,
// 			time: request.time,
// 			text_format: "plain"
//     }
// 	}).then(response => console.log(response.data.results));
// };


//example
export const fetchMeetups = (request) => {
	return axios({
		method:'get',
		url:"https://api.meetup.com/2/open_events/?key=682f5e4b26d16d31377034866e33",
    params:{
      city: "San Francisco",
			zipcode: 94015,
			radius: 15.0,
      text: "tech AND code",
			order: "time",
			text_format:"plain"
    }
	});
};

// let epoch = new Date('2016-10-11').getTime();
// console.log(epoch);


//picture
// export const fetchMeetupPicture = () => {
//   return axios({
//     method: 'get',
//     url: 'https://api.meetup.com/Consciousness-Hacking-San-Francisco/photos/?key=682f5e4b26d16d31377034866e33',
//     // params:{
//     //   event_id: 239557432,
//     //   urlname: "Bootcamp-Curious"
//     // }
//   }).then(response => console.log(response));
// };
