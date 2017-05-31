import axios from 'axios';


// export const fetchMeetups = (request) => {

// 	let stringInput = parseInput(request.input);
// 	let startDate = parseDate(request.startDate);
// 	let endDate = parseDate(request.endDate);
// 	let zipcode = parseInt(request.zipcode);

// 	return axios({
// 		method:'get',
// 		url:"https://api.meetup.com/2/open_events/?key=5815414d494c24b2f64765e64d592f",
//     params:{
//       city: request.city,
// 			zip: zipcode,
// 			radius: request.radius,
//       text: stringInput,
// 			time: `${startDate},${endDate}`,
// 			order: "time",
// 			text_format: "plain"
//     }
// 	});
// };


function parseInput(input){
	return input.split(" ").join(" AND ").trim();
}

function parseDate(date){
	return date.getTime();
}

//example
export const fetchMeetups = (request) => {
	console.log(request)
	return axios({
		method:'get',
		url:"https://api.meetup.com/2/open_events/?key=682f5e4b26d16d31377034866e33",
    params:{
      city: "San Francisco",
			zip: 94015,
			radius: 15.0,
      text: "tech AND code",
			order: "time",
			text_format:"plain"
    }
	});
};

let epoch = new Date('2016-10-11').getTime();
console.log(epoch);
