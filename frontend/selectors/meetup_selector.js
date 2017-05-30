//state.meetup.data
//data.results is an array

export const meetupSelector = (data) => {
  let byDate = {};

  if(data.results){

    for(let i = 0; i < data.results.length; i++){
      let element = data.results[i];

      let date = new Date(element.time);
      let eventSchedule = parseDate(date);
      let eventDate = eventSchedule[0];
      let eventTime = eventSchedule[1];

      let eventInfo = {name: element.name, eventUrl: element.event_url, eventDate: eventDate, eventTime: eventTime};

      if(byDate.hasOwnProperty(eventDate)){
        byDate[eventDate].push(eventInfo);
      } else {
        byDate[eventDate] = [eventInfo];
      }
    }
  }

  return byDate;
};

function parseDate(date){
  return date.toLocaleString().split(',');
}
