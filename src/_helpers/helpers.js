export function convertedTime(city_dt) {
  // console.log(city_dt); //-----------------------
  // const unix_timestamp = city_dt;
  const date = new Date(city_dt * 1000);
  const hours = date.getHours();

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = '0' + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  };
  
  return {
    minutes,
    hours,
    date
  };
};

export function showDaysOfWeek(data) {
  let day;

  switch (data) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = '';
      break;
  }

  return day;
};