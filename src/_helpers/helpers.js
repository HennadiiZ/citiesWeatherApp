export function convertedTime(city_dt) {

  const unix_timestamp = city_dt;
  const date = new Date(unix_timestamp * 1000);
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
}