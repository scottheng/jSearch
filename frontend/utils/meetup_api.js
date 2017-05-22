import axios from 'axios';


export const fetchMeetups = (request) => {
	console.log(request);

	let stringInput = parseInput(request.input);
	let startDate = parseDate(request.startDate);
	let endDate = parseDate(request.endDate);

	return axios({
		method:'get',
		url:"https://api.meetup.com/2/open_events/?key=682f5e4b26d16d31377034866e33",
    params:{
      city: request.city,
			zipcode: request.zipcode,
			radius: request.radius,
      text: stringInput,
			time: `${startDate},${endDate}`,
			order: "time",
			text_format: "plain"
    }
	});
};


function parseInput(input){
	return input.split(" ").join(" AND ");
}

function parseDate(date){
	return date.getTime();
}

//example
// export const fetchMeetups = (request) => {
// 	return axios({
// 		method:'get',
// 		url:"https://api.meetup.com/2/open_events/?key=682f5e4b26d16d31377034866e33",
//     params:{
//       city: "San Francisco",
// 			zipcode: 94015,
// 			radius: 15.0,
//       text: "tech AND code",
// 			order: "time",
// 			text_format:"plain"
//     }
// 	});
// };

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
